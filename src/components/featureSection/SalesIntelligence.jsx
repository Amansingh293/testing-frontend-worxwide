import React from "react";
import ProfileCard from "../heroSectionComponents/ProfileCard";
import FeatureComponent from "./FeatureComponent";
import uplongline from "@/assets/uplongline.svg";
import upshortline from "@/assets/upshortline.svg";
import straightline from "@/assets/straightline.svg";
import downshortline from "@/assets/downshortline.svg";
import downlongline from "@/assets/downlongline.svg";
import smallline from "@/assets/smallstraightline.png";
import PersonCard from "../common/PersonCard";
import DropEffect from "../common/dropEffectAnimation/DropEffect";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";

const SalesIntelligence = () => {

  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col gap-10 pl-8 pr-1 pt-12 pb-12 font-inter rounded-3xl bg-white w-full">
      <div className="flex flex-col w-full items-center gap-4">
        <h1 className="text-[#252B37] leading-[38px] text-[30px]">
          AI-Driven Sales Intelligence
        </h1>
        <p className="text-[#535862] leading-[24px] font-normal text-[16px]">
          Salesworx Looks at much records for each account
        </p>
      </div>
      <div className="w-full flex items-center gap-5 justify-between ">
        <div className="flex flex-col gap-[31px]">
          <FeatureComponent
            image={
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="#207C97"
                  fill-opacity="0.08"
                />
                <path
                  d="M29.818 17.8178V25.0906C29.818 25.4763 29.6675 25.8463 29.3996 26.1191C29.1317 26.3919 28.7683 26.5451 28.3895 26.5451C27.3109 26.6106 26.9609 25.8178 26.9609 25.0324V16.3633H28.3895C28.7683 16.3633 29.1317 16.5165 29.3996 16.7893C29.6675 17.0621 29.818 17.4321 29.818 17.8178Z"
                  fill="#207C97"
                />
                <path
                  d="M25.5322 17.8182V14.1818C25.5322 13.6032 25.3065 13.0482 24.9046 12.639C24.5028 12.2299 23.9577 12 23.3894 12H11.9611C11.3928 12 10.8478 12.2299 10.446 12.639C10.0441 13.0482 9.81835 13.6032 9.81835 14.1818V24.3636C9.80305 25.3114 10.1577 26.2267 10.8046 26.9084C11.4514 27.5902 12.3374 27.9828 13.2683 28H29.1036C28.3477 27.9103 27.6183 27.6627 26.9608 27.2727C26.553 27.0721 26.2054 26.7639 25.9542 26.3802C25.703 25.9965 25.5573 25.5513 25.5322 25.0909V17.8182ZM20.5324 23.6364H14.8182C14.6288 23.6364 14.4471 23.5597 14.3132 23.4234C14.1792 23.287 14.1039 23.102 14.1039 22.9091C14.1039 22.7162 14.1792 22.5312 14.3132 22.3948C14.4471 22.2584 14.6288 22.1818 14.8182 22.1818H20.5324C20.7218 22.1818 20.9035 22.2584 21.0374 22.3948C21.1714 22.5312 21.2466 22.7162 21.2466 22.9091C21.2466 23.102 21.1714 23.287 21.0374 23.4234C20.9035 23.5597 20.7218 23.6364 20.5324 23.6364ZM20.5324 20.7273H14.8182C14.6288 20.7273 14.4471 20.6507 14.3132 20.5143C14.1792 20.3779 14.1039 20.1929 14.1039 20C14.1039 19.8071 14.1792 19.6221 14.3132 19.4857C14.4471 19.3494 14.6288 19.2727 14.8182 19.2727H20.5324C20.7218 19.2727 20.9035 19.3494 21.0374 19.4857C21.1714 19.6221 21.2466 19.8071 21.2466 20C21.2466 20.1929 21.1714 20.3779 21.0374 20.5143C20.9035 20.6507 20.7218 20.7273 20.5324 20.7273ZM20.5324 17.8182H14.8182C14.6288 17.8182 14.4471 17.7416 14.3132 17.6052C14.1792 17.4688 14.1039 17.2838 14.1039 17.0909C14.1039 16.898 14.1792 16.713 14.3132 16.5766C14.4471 16.4403 14.6288 16.3636 14.8182 16.3636H20.5324C20.7218 16.3636 20.9035 16.4403 21.0374 16.5766C21.1714 16.713 21.2466 16.898 21.2466 17.0909C21.2466 17.2838 21.1714 17.4688 21.0374 17.6052C20.9035 17.7416 20.7218 17.8182 20.5324 17.8182Z"
                  fill="#207C97"
                />
              </svg>
            }
            title={"Website news"}
            homepage={true}
          >
            <img
              src={uplongline}
              alt="uplongline"
              className="absolute left-[194px] top-[29px]"
            />
          </FeatureComponent>
          <FeatureComponent
            image={
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.1875"
                  width="40"
                  height="40"
                  rx="20"
                  fill="#207C97"
                  fill-opacity="0.08"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.902 30.7637C29.5157 30.1723 29.9337 29.4188 30.1031 28.5984C30.2725 27.778 30.1857 26.9276 29.8537 26.1548C29.5217 25.3819 28.9594 24.7213 28.238 24.2566C27.5165 23.7918 26.6683 23.5437 25.8006 23.5437C24.9328 23.5437 24.0846 23.7918 23.3631 24.2566C22.6417 24.7213 22.0794 25.3819 21.7474 26.1548C21.4154 26.9276 21.3286 27.778 21.498 28.5984C21.6674 29.4188 22.0854 30.1723 22.6991 30.7637C23.5224 31.5554 24.6377 32 25.8006 32C26.9634 32 28.0788 31.5554 28.902 30.7637ZM27.2185 28.012C27.3629 28.1709 27.4596 28.3648 27.4983 28.5727C27.537 28.7807 27.5162 28.9948 27.4381 29.1922C27.332 29.4261 27.1621 29.6278 26.9465 29.7759C26.7309 29.9241 26.4777 30.0131 26.2138 30.0336C26.204 30.0336 26.1942 30.0354 26.1844 30.0365V30.4112C26.1819 30.5012 26.143 30.5867 26.076 30.6495C26.0091 30.7123 25.9194 30.7474 25.826 30.7474C25.7326 30.7474 25.6429 30.7123 25.576 30.6495C25.509 30.5867 25.4701 30.5012 25.4676 30.4112V30.0115C25.1377 29.9676 24.8294 29.8285 24.5831 29.6124C24.3368 29.3964 24.1641 29.1136 24.0877 28.8012C24.0771 28.757 24.0757 28.7112 24.0836 28.6664C24.0914 28.6217 24.1083 28.5789 24.1332 28.5404C24.1582 28.5019 24.1908 28.4686 24.2292 28.4423C24.2675 28.416 24.3109 28.3972 24.3567 28.3871C24.4026 28.3769 24.4501 28.3756 24.4965 28.3831C24.543 28.3906 24.5874 28.4069 24.6273 28.431C24.6672 28.4551 24.7017 28.4865 24.729 28.5235C24.7563 28.5604 24.7758 28.6022 24.7863 28.6464C24.9251 29.2287 25.5568 29.4178 26.1213 29.347C26.257 29.3397 26.3883 29.2982 26.5021 29.2266C26.6159 29.155 26.7082 29.0557 26.7696 28.9389C26.8009 28.8568 26.8078 28.768 26.7896 28.6824C26.7714 28.5968 26.7288 28.5178 26.6665 28.4542C26.4459 28.199 26.2141 28.1657 25.8631 28.1148C25.6377 28.0887 25.4158 28.0399 25.2009 27.9693L25.1898 27.9653C24.9304 27.8856 24.7032 27.7301 24.5397 27.5203C24.3761 27.3105 24.2843 27.0569 24.277 26.7946C24.2893 26.5303 24.3846 26.2759 24.5503 26.0651C24.7161 25.8543 24.9444 25.6971 25.205 25.6144C25.2906 25.5836 25.3783 25.5587 25.4676 25.5399V25.137C25.4701 25.0471 25.509 24.9616 25.576 24.8988C25.6429 24.836 25.7326 24.8009 25.826 24.8009C25.9194 24.8009 26.0091 24.836 26.076 24.8988C26.143 24.9616 26.1819 25.0471 26.1844 25.137V25.5325C26.4798 25.5949 26.7536 25.7295 26.9794 25.9234C27.2052 26.1174 27.3753 26.3641 27.4734 26.6398C27.5071 26.7255 27.5041 26.8206 27.465 26.9041C27.426 26.9877 27.3541 27.0528 27.2652 27.0853C27.1763 27.1177 27.0777 27.1148 26.991 27.0772C26.9043 27.0395 26.8368 26.9702 26.8031 26.8845C26.7631 26.7543 26.6951 26.6336 26.6036 26.5302C26.5122 26.4269 26.3992 26.3432 26.272 26.2846C26.1449 26.226 26.0064 26.1938 25.8655 26.1901C25.7246 26.1863 25.5845 26.2112 25.4542 26.263C25.3304 26.2991 25.2206 26.3699 25.1386 26.4663C25.0566 26.5627 25.0061 26.6804 24.9936 26.8045C24.9904 27.0201 25.1536 27.204 25.4534 27.3225C25.6215 27.3754 25.7947 27.4119 25.9703 27.4314C26.2082 27.4418 26.4415 27.4986 26.656 27.5984C26.8705 27.6982 27.062 27.8389 27.2185 28.012ZM27.7496 23.2277C26.5427 22.7466 25.1904 22.7299 23.971 23.1809C22.7517 23.632 21.7581 24.5165 21.1949 25.6524H15.4273C15.3794 25.6511 15.3317 25.6591 15.287 25.6759C15.2424 25.6927 15.2017 25.718 15.1673 25.7502C15.133 25.7824 15.1057 25.8209 15.0871 25.8635C15.0684 25.906 15.0588 25.9517 15.0588 25.9979C15.0588 26.0441 15.0684 26.0899 15.0871 26.1324C15.1057 26.175 15.133 26.2135 15.1673 26.2457C15.2017 26.2779 15.2424 26.3032 15.287 26.32C15.3317 26.3368 15.3794 26.3447 15.4273 26.3435H20.9174C20.8069 26.6959 20.7376 27.0591 20.7109 27.4264H15.4286C15.3807 27.4251 15.333 27.4331 15.2884 27.4499C15.2438 27.4667 15.2031 27.4919 15.1687 27.5241C15.1344 27.5564 15.1071 27.5949 15.0884 27.6374C15.0698 27.68 15.0602 27.7257 15.0602 27.7719C15.0602 27.8181 15.0698 27.8638 15.0884 27.9064C15.1071 27.9489 15.1344 27.9875 15.1687 28.0197C15.2031 28.0519 15.2438 28.0771 15.2884 28.0939C15.333 28.1107 15.3807 28.1187 15.4286 28.1175H20.7104C20.7362 28.4763 20.8025 28.8313 20.9081 29.1762H14.0384C13.8956 29.1761 13.7586 29.1213 13.6577 29.0239C13.5567 28.9264 13.5 28.7944 13.5 28.6567V11.4635C13.5002 11.3259 13.557 11.194 13.6579 11.0967C13.7589 10.9994 13.8957 10.9447 14.0384 10.9444H27.2112C27.3539 10.9447 27.4907 10.9994 27.5917 11.0967C27.6926 11.194 27.7494 11.3259 27.7496 11.4635V23.2277ZM25.3895 15.5375C25.4828 15.5351 25.5715 15.4976 25.6366 15.433C25.7017 15.3685 25.7382 15.282 25.7382 15.192C25.7382 15.102 25.7017 15.0155 25.6366 14.951C25.5715 14.8864 25.4828 14.8489 25.3895 14.8465H19.9755C19.9276 14.8452 19.8799 14.8532 19.8353 14.87C19.7907 14.8868 19.75 14.912 19.7156 14.9442C19.6813 14.9764 19.654 15.015 19.6353 15.0575C19.6167 15.1001 19.6071 15.1458 19.6071 15.192C19.6071 15.2382 19.6167 15.2839 19.6353 15.3265C19.654 15.369 19.6813 15.4076 19.7156 15.4398C19.75 15.472 19.7907 15.4972 19.8353 15.514C19.8799 15.5308 19.9276 15.5388 19.9755 15.5375H25.3895ZM25.1128 13.0846C25.1607 13.0858 25.2084 13.0778 25.253 13.061C25.2977 13.0442 25.3384 13.019 25.3727 12.9868C25.4071 12.9546 25.4344 12.916 25.453 12.8735C25.4716 12.8309 25.4812 12.7852 25.4812 12.739C25.4812 12.6928 25.4716 12.6471 25.453 12.6045C25.4344 12.562 25.4071 12.5235 25.3727 12.4912C25.3384 12.459 25.2977 12.4338 25.253 12.417C25.2084 12.4002 25.1607 12.3922 25.1128 12.3935H15.8193C15.7714 12.3922 15.7237 12.4002 15.6791 12.417C15.6344 12.4338 15.5937 12.459 15.5594 12.4912C15.525 12.5235 15.4977 12.562 15.4791 12.6045C15.4604 12.6471 15.4508 12.6928 15.4508 12.739C15.4508 12.7852 15.4604 12.8309 15.4791 12.8735C15.4977 12.916 15.525 12.9546 15.5594 12.9868C15.5937 13.019 15.6344 13.0442 15.6791 13.061C15.7237 13.0778 15.7714 13.0858 15.8193 13.0846H25.1128ZM19.106 15.1919C19.106 15.1003 19.0683 15.0124 19.0011 14.9476C18.9339 14.8829 18.8428 14.8465 18.7477 14.8465H15.7521C15.6571 14.8465 15.5659 14.8829 15.4987 14.9476C15.4315 15.0124 15.3938 15.1003 15.3938 15.1919V19.5161C15.3938 19.5615 15.4031 19.6064 15.4211 19.6483C15.4391 19.6902 15.4655 19.7283 15.4987 19.7604C15.532 19.7924 15.5715 19.8179 15.615 19.8352C15.6584 19.8526 15.705 19.8615 15.7521 19.8615H18.7477C18.7948 19.8615 18.8414 19.8526 18.8848 19.8352C18.9283 19.8179 18.9678 19.7924 19.0011 19.7604C19.0344 19.7283 19.0607 19.6902 19.0788 19.6483C19.0968 19.6064 19.106 19.5615 19.106 19.5161V15.1919ZM25.7478 17.353C25.7478 17.2613 25.71 17.1735 25.6428 17.1087C25.5756 17.0439 25.4845 17.0075 25.3895 17.0075H19.9755C19.9276 17.0063 19.8799 17.0143 19.8353 17.0311C19.7907 17.0479 19.75 17.0731 19.7156 17.1053C19.6813 17.1375 19.654 17.176 19.6353 17.2186C19.6167 17.2612 19.6071 17.3069 19.6071 17.3531C19.6071 17.3993 19.6167 17.445 19.6353 17.4876C19.654 17.5301 19.6813 17.5686 19.7156 17.6009C19.75 17.6331 19.7907 17.6583 19.8353 17.6751C19.8799 17.6919 19.9276 17.6999 19.9755 17.6986H25.3895C25.4845 17.6986 25.5757 17.6621 25.6429 17.5973C25.71 17.5325 25.7478 17.4446 25.7478 17.353ZM19.9763 19.1707C19.8813 19.1707 19.7902 19.2071 19.723 19.2719C19.6558 19.3367 19.618 19.4245 19.618 19.5161C19.618 19.6077 19.6558 19.6956 19.723 19.7604C19.7902 19.8251 19.8813 19.8615 19.9763 19.8615H25.3903C25.4836 19.8591 25.5723 19.8216 25.6374 19.757C25.7026 19.6925 25.739 19.606 25.739 19.516C25.739 19.426 25.7026 19.3395 25.6374 19.275C25.5723 19.2104 25.4836 19.1729 25.3903 19.1705L19.9763 19.1707ZM15.7521 21.3326C15.6587 21.3351 15.5701 21.3726 15.505 21.4371C15.4398 21.5016 15.4034 21.5881 15.4034 21.6781C15.4034 21.7682 15.4398 21.8546 15.505 21.9192C15.5701 21.9837 15.6587 22.0212 15.7521 22.0237H25.3895C25.4828 22.0212 25.5715 21.9837 25.6366 21.9192C25.7017 21.8546 25.7382 21.7682 25.7382 21.6781C25.7382 21.5881 25.7017 21.5016 25.6366 21.4371C25.5715 21.3726 25.4828 21.3351 25.3895 21.3326H15.7521ZM15.3938 23.8401C15.3938 23.7485 15.4315 23.6607 15.4987 23.5959C15.5659 23.5311 15.6571 23.4947 15.7521 23.4947H21.7787C21.8266 23.4935 21.8743 23.5015 21.9189 23.5182C21.9636 23.535 22.0043 23.5603 22.0386 23.5925C22.073 23.6247 22.1003 23.6632 22.1189 23.7058C22.1376 23.7483 22.1472 23.7941 22.1472 23.8403C22.1472 23.8865 22.1376 23.9322 22.1189 23.9747C22.1003 24.0173 22.073 24.0558 22.0386 24.088C22.0043 24.1202 21.9636 24.1455 21.9189 24.1623C21.8743 24.1791 21.8266 24.1871 21.7787 24.1858H15.7521C15.657 24.1857 15.5659 24.1493 15.4987 24.0845C15.4315 24.0196 15.3938 23.9318 15.3938 23.8401ZM18.3892 19.1718V15.5375H16.1107V19.1705L18.3892 19.1718ZM12.7831 27.2307H11.7259C11.5832 27.2305 11.4464 27.1758 11.3454 27.0785C11.2445 26.9812 11.1877 26.8493 11.1875 26.7117V9.51903C11.1876 9.38142 11.2444 9.24948 11.3454 9.15217C11.4463 9.05487 11.5832 9.00014 11.7259 9H24.8987C25.0415 9.00021 25.1783 9.05499 25.2793 9.15234C25.3802 9.24969 25.4369 9.38165 25.4371 9.51929V10.2536H14.0379C13.705 10.254 13.386 10.3816 13.1506 10.6085C12.9153 10.8353 12.7829 11.1429 12.7826 11.4637L12.7831 27.2307Z"
                  fill="#207C97"
                />
              </svg>
            }
            title={"Annual Reports"}
            homepage={true}
          >
            {" "}
            <img
              src={upshortline}
              alt="upshortline"
              className="absolute left-[193px] top-[28px]"
            />
          </FeatureComponent>
          <FeatureComponent
            image={
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5625"
                  width="40"
                  height="40"
                  rx="20"
                  fill="#207C97"
                  fill-opacity="0.08"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.0738 9.39069L22.0085 11.0146C22.0952 11.1653 22.2364 11.2606 22.4157 11.2909L24.3565 11.6198C24.572 11.6564 24.737 11.791 24.8047 11.9853C24.8724 12.1796 24.8238 12.3792 24.6721 12.5272L23.3083 13.8597C23.1825 13.9827 23.1281 14.1378 23.1529 14.3071L23.418 16.1343C23.4476 16.3375 23.3617 16.5255 23.1844 16.6459C23.007 16.7662 22.7886 16.784 22.5921 16.6958L20.8154 15.8954C20.6504 15.8214 20.4768 15.8214 20.3118 15.8954L18.5351 16.6958C18.3377 16.7849 18.1203 16.7662 17.9429 16.6459C17.7655 16.5255 17.6797 16.3375 17.7092 16.1343L17.9743 14.3071C17.9991 14.1377 17.9448 13.9826 17.8189 13.8597L16.4551 12.5272C16.3035 12.3792 16.2548 12.1796 16.3225 11.9853C16.3903 11.791 16.5552 11.6555 16.7708 11.6198L18.7115 11.2909C18.8908 11.2606 19.032 11.1644 19.1188 11.0146L20.0534 9.39069C20.1573 9.21064 20.3452 9.10547 20.5636 9.10547C20.782 9.10547 20.9699 9.21064 21.0738 9.39069ZM16.1384 19.4027C16.4303 19.4027 16.7087 19.4544 16.9653 19.548C16.724 20.0275 16.5886 20.5623 16.5886 21.1274C16.5886 21.7219 16.7402 22.2968 17.0196 22.811C15.0255 23.9457 13.7493 25.9913 13.7493 28.2516C13.7493 28.6473 13.7884 29.0413 13.8657 29.4299C13.2534 29.4058 12.8071 29.3738 12.684 29.339C12.1852 29.1973 11.8295 28.8488 11.7017 28.3755C11.6102 28.0386 11.5625 27.6865 11.5625 27.3229C11.5625 25.3914 12.932 23.7595 14.8135 23.2292C14.2461 22.8451 13.877 22.2211 13.877 21.5161C13.877 20.3494 14.8889 19.4029 16.1382 19.4029L16.1384 19.4027ZM24.9868 19.4027C26.2361 19.4027 27.248 20.3493 27.248 21.516C27.248 22.221 26.8789 22.8449 26.3115 23.229C28.1921 23.7603 29.5625 25.3922 29.5625 27.3227C29.5625 27.6855 29.5139 28.0384 29.4233 28.3753C29.2955 28.8486 28.9397 29.1962 28.441 29.3388C28.2598 29.3905 27.8249 29.4253 27.2565 29.4476C27.3366 29.0536 27.3766 28.6525 27.3766 28.2515C27.3766 25.992 26.1006 23.9465 24.1063 22.8109C24.3857 22.2975 24.5374 21.7226 24.5374 21.1272C24.5374 20.5621 24.4019 20.0274 24.1606 19.5478C24.4162 19.4551 24.6947 19.4025 24.9865 19.4025L24.9868 19.4027ZM20.5626 18.5355C19.031 18.5355 17.7884 19.6959 17.7884 21.1282C17.7884 21.9928 18.2414 22.7584 18.9376 23.229C16.6306 23.8805 14.9502 25.8824 14.9502 28.2515C14.9502 28.6972 15.0093 29.1295 15.1218 29.543C15.2792 30.1233 15.715 30.5502 16.3273 30.7249C16.9281 30.896 23.8309 31.0012 24.7999 30.7249C25.4122 30.5502 25.848 30.1233 26.0054 29.543C26.117 29.1304 26.177 28.6972 26.177 28.2515C26.177 25.8824 24.4966 23.8806 22.1887 23.229C22.8849 22.7575 23.3379 21.9927 23.3379 21.1282C23.3369 19.6959 22.0942 18.5355 20.5626 18.5355Z"
                  fill="#207C97"
                />
              </svg>
            }
            title={"leadership pages"}
            homepage={true}
          >
            {" "}
            <img
              src={straightline}
              alt="straightline"
              className="absolute left-[194px] top-[23px]"
            />
          </FeatureComponent>
          <FeatureComponent
            image={
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="#207C97"
                  fill-opacity="0.08"
                />
                <path
                  d="M17.2203 10.656V30.3427C17.2203 30.7057 17.5144 30.9986 17.8763 30.9999H23.1234C23.4853 30.9986 23.7795 30.7057 23.7795 30.3427V10.656C23.7795 10.4825 23.7106 10.3151 23.5875 10.192C23.4644 10.0689 23.297 10 23.1234 10H17.8763C17.5132 10 17.2203 10.2929 17.2203 10.656ZM10.6585 16.561C10.2942 16.5598 9.99753 16.8551 10 17.2194V30.3502C10.0037 30.7108 10.2979 31 10.6585 30.9988H15.2461V31C15.608 30.9988 15.9022 30.7059 15.9022 30.3428V17.2171V17.2183C15.9022 17.0436 15.8333 16.8762 15.7102 16.7531C15.5871 16.63 15.4197 16.5611 15.2461 16.5611L10.6585 16.561ZM25.0979 20.5019V30.3427C25.0979 30.7057 25.3921 30.9986 25.7539 30.9999H30.3513C30.707 30.9962 30.9963 30.7082 31 30.3513V20.5054C31.0012 20.1448 30.712 19.8507 30.3513 19.847H25.7539V19.8458C25.3921 19.8458 25.0979 20.14 25.0979 20.5019Z"
                  fill="#207C97"
                />
              </svg>
            }
            title={"Financial Stats"}
            homepage={true}
          >
            <img
              src={downshortline}
              alt="downshortline"
              className="absolute left-[194px] bottom-[30px]"
            />
          </FeatureComponent>

          <FeatureComponent
            image={
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="#207C97"
                  fill-opacity="0.08"
                />
                <path
                  d="M29.4545 13.9751L25.0455 9.54772C24.6818 9.18257 24.2273 9 23.7273 9H12.8636C11.8182 9 11 9.82158 11 10.8714V29.1286C11 30.1784 11.8182 31 12.8636 31H28.1364C29.1818 31 30 30.1784 30 29.1286V15.2988C30 14.7967 29.8182 14.2946 29.4545 13.9751ZM19 16.5311C18.1818 17.3527 17.3636 18.1743 16.5455 18.9959C15.9091 19.6349 14.9545 18.6307 15.5909 18.0373C16.5909 17.0332 17.5455 16.0747 18.5455 15.0705C18.8182 14.7967 19.2273 14.7967 19.5 15.0705C20.3182 15.8921 21.1364 16.7137 21.9545 17.5353C22.7727 16.7137 23.6364 15.8465 24.4545 15.0249C25.0909 14.3859 26.0455 15.39 25.4091 15.9834C24.4091 16.9876 23.4091 17.9917 22.4091 18.9959C22.1364 19.2697 21.7273 19.2697 21.4545 18.9959C20.6364 18.1743 19.8182 17.3527 19 16.5311ZM20.6364 22.3734C20.4091 22.3734 20.1818 22.3734 19.9545 22.3734C18.3636 22.3734 16.7727 22.3734 15.2273 22.3734C14.3636 22.3734 14.3636 21.0042 15.2273 21.0042C15.4545 21.0042 15.6818 21.0042 15.9091 21.0042C17.5 21.0042 19.0909 21.0042 20.6364 21.0042C21.5 21.0042 21.5 22.3734 20.6364 22.3734ZM15.1818 26.0705C15.5 26.0705 15.7727 26.0705 16.0909 26.0705C18.2273 26.0705 20.3182 26.0705 22.4545 26.0705C23.3182 26.0705 23.3182 27.4398 22.4545 27.4398C22.1364 27.4398 21.8636 27.4398 21.5455 27.4398C19.4091 27.4398 17.3182 27.4398 15.1818 27.4398C14.3182 27.4398 14.3182 26.0705 15.1818 26.0705ZM25.8182 24.8838C25.3636 24.8838 24.9545 24.8838 24.5 24.8838C21.4091 24.8838 18.3182 24.8838 15.2273 24.8838C14.3636 24.8838 14.3636 23.5145 15.2273 23.5145C15.6818 23.5145 16.0909 23.5145 16.5455 23.5145C19.6364 23.5145 22.7273 23.5145 25.8182 23.5145C26.6818 23.5145 26.6818 24.8838 25.8182 24.8838Z"
                  fill="#207C97"
                />
              </svg>
            }
            title={"Articles"}
            homepage={true}
          >
            {" "}
            <img
              src={downlongline}
              alt="downlongline"
              className="absolute left-[194px] bottom-[32px]"
            />
          </FeatureComponent>
        </div>
        <DropEffect
          icon={
            <svg
              width="135"
              height="134"
              viewBox="0 0 135 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="67.5625" cy="67" r="16.75" fill="#207C97" />
              <circle cx="67.5625" cy="67" r="16.75" fill="#207C97" />
              <circle cx="67.5625" cy="67" r="16.75" fill="#207C97" />
              <path
                d="M67.9868 76.3816H62.6636L67.5922 67.002H72.9154L67.9868 76.3816Z"
                fill="white"
              />
              <path
                d="M67.5205 67.0007H62.1973L67.1259 57.6211H72.4491L67.5205 67.0007Z"
                fill="white"
              />
            </svg>
          }
          className={"ml-32"}
        />
        <div className="flex gap-0 items-center">
          <img
            src={smallline}
            alt="smallline "
            className="relative left-[14px] z-30"
          />
          <PersonCard />
        </div>
      </div>
      <div className="flex justify-center">
        <CustomButton
          variant="secondary"
          text={"Start for free*"}
          onClick={()=>navigate("/login")}
          showIcon={true}
        />{" "}
      </div>
    </div>
  );
};

export default SalesIntelligence;
