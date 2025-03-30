import React, { useMemo, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const API_BASE_URL = import.meta.env.VITE_STRAPI_BASE_URL;

const StrapiDescriptionRenderer = ({ content, selectedId }) => {
  const h2Refs = useRef([]);

  useEffect(() => {
    if (selectedId && h2Refs.current[selectedId - 1]) {
      h2Refs.current[selectedId - 1].scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedId]);

  console.log(h2Refs.current);
  const components = useMemo(
    () => ({
      h1: ({ node, ...props }) => (
        <h1
          key={node?.position?.start?.offset}
          className="text-h1-text-subtitle font-extrabold mt-12 mb-2 text-[#252B37] font-inter"
          {...props}
        />
      ),
      h2: ({ node, ...props }) => {
        return (
          <h2
            key={node?.position?.start?.offset}
            ref={(el) => {
              if (el) h2Refs.current.push(el);
            }}
            className="text-[24px] mb-3 mt-5 font-bold leading-[28px] font-inter"
            {...props}
          />
        );
      },
      h3: ({ node, ...props }) => (
        <h3
          key={node?.position?.start?.offset}
          className="text-h3-text-subtitle mb-2 font-inter font-semibold"
          {...props}
        />
      ),
      h4: ({ node, ...props }) => (
        <h3
          key={node?.position?.start?.offset}
          className="text-h3-text-subtitle mb-2 font-inter font-bold"
          {...props}
        />
      ),
      p: ({ node, ...props }) => (
        <p
          key={node?.position?.start?.offset}
          className="text-[16px] text-[#414651] font-normal leading-[24px] font-inter"
          {...props}
        />
      ),
      ul: ({ node, ...props }) => (
        <ul
          key={node?.position?.start?.offset}
          className="list-disc pl-5 mb-2 font-inter"
          {...props}
        />
      ),
      ol: ({ node, ...props }) => (
        <ol
          key={node?.position?.start?.offset}
          className="list-decimal pl-5 mb-2 font-inter"
          {...props}
        />
      ),
      strong: ({ node, ...props }) => (
        <strong
          key={node?.position?.start?.offset}
          className="font-semibold font-inter"
          {...props}
        />
      ),
      blockquote: ({ node, ...props }) => (
        <blockquote
          key={node?.position?.start?.offset}
          className="border-l-4 border-gray-300 pl-4 italic my-4 font-inter"
          {...props}
        />
      ),
      code: ({ node, inline, ...props }) =>
        inline ? (
          <code
            key={node?.position?.start?.offset}
            className="bg-gray-100 rounded px-1 py-0.5"
            {...props}
          />
        ) : (
          <pre
            key={node?.position?.start?.offset}
            className="bg-gray-100 p-4 rounded my-4 overflow-x-auto"
          >
            <code {...props} />
          </pre>
        ),
      img: ({ src, alt, ...props }) => {
        if (!src) return null;

        const imageSrc = src.startsWith("/uploads")
          ? `${API_BASE_URL}${src}`
          : src;

        return (
          <img
            src={imageSrc}
            alt={alt || "Image description not available"}
            className="w-fit h-fit rounded my-4 object-fill mt-12"
            onError={(e) => {
              e.currentTarget.src = "/fallback-image.png";
            }}
            {...props}
          />
        );
      },
    }),
    []
  );

  return (
    <div className="strapi-content-preview rich-text-content" id="description">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
};

export default StrapiDescriptionRenderer;
