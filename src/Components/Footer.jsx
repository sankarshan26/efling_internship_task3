import React from "react";
import "../CSS/Footer.css";
import logo from "../images/navbar/logo.png";
export default function Footer() {
  return (
    <>
     
      <div className="footer-cont w-full flex flex-col items-center pt-5  space-y-2 md:space-y-4 opacity-90 mt-8">
        {/* logo */}
        <div>
          <img
            src={logo}
            alt="logo"
            className="h-11 hover:cursor-pointer "
          ></img>
          <div className="text-xs text-end -mt-2 opacity-50 success">
            Success is here!!!
          </div>
        </div>
        {/* middle */}
        <div className="middle py-5 flex flex-col sm:flex-row flex-wrap md:flex-nowrap w-4/5 items-center justify-evenly md:justify-between gap-y-8 gap-x-14">
          <ul className="gap-3 flex flex-col items-left">
            <li className="heading text-left py-1
            ">About</li>
            <li className="text-left  hover:cursor-pointer">Overview</li>
            <li className="text-left hover:cursor-pointer">Courses</li>
            <li className="text-left hover:cursor-pointer">Tutorials</li>
            <li className="text-left  hover:cursor-pointer">Pricing&nbsp;Plan</li>
            <li className="text-left hover:cursor-pointer">Releases</li>
          </ul>
          <span className="line md:hidden lg:block ">&nbsp;</span>
          <ul className="gap-3 flex flex-col items-left">
            <li className="heading text-center py-1">Company</li>
            <li className="text-left hover:cursor-pointer">About Us</li>
            <li className="text-left hover:cursor-pointer">Careers</li>
            <li className="text-left hover:cursor-pointer">Press</li>
            <li className="text-left  hover:cursor-pointer">Media Kits</li>
            <li className="text-left  hover:cursor-pointer">Contact Us</li>
          </ul>
          <span className="line md:hidden lg:block ">&nbsp;</span>
          <ul className="gap-3 flex flex-col items-start">
            <li className="heading text-left py-1">Resources</li>
            <li className="text-left  hover:cursor-pointer">Blog</li>
            <li className="text-left hover:cursor-pointer">Newsletter</li>
            <li className="text-left hover:cursor-pointer">Events</li>
            <li className="text-left  hover:cursor-pointer">Help-Center</li>
            <li className="text-left hover:cursor-pointer">Tutorials</li>
          </ul>
          <span className="line md:hidden lg:block ">&nbsp;</span>
          <ul className="gap-3 flex flex-col items-left">
            <li className="heading text-left py-1 ">Social</li>
            <li className="text-left  hover:cursor-pointer">Twitter</li>
            <li className="text-left hover:cursor-pointer">LinkedIn</li>
            <li className="text-left hover:cursor-pointer">Facebook</li>
            <li className="text-left  hover:cursor-pointer">Discord</li>
            <li className="text-left hover:cursor-pointer">Instagram</li>
          </ul>
          <span className="line md:hidden lg:block ">&nbsp;</span>
          <ul className="gap-3 flex flex-col items-left">
            <li className="heading text-left py-1">Legal</li>
            <li className="text-left  hover:cursor-pointer">Terms</li>
            <li className="text-left hover:cursor-pointer">Privacy</li>
            <li className="text-left hover:cursor-pointer">Cookies</li>
            <li className="text-left  hover:cursor-pointer">Licenses</li>
            <li className="text-left hover:cursor-pointer">Contact</li>
          </ul>

        </div>

        {/* end */}
        <div className=" end w-full flex flex-wrap justify-center md:justify-between px-14  items-center py-3 space-y-2 md:space-y-0 gap-x-6">
          <span className="text-center">
            @2022-2023 Copyright Edfling.com All Rights Reserved
          </span>
          <div className="w-min flex space-x-4 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none" 
              className="hover:cursor-pointer"
            >
              <path
                d="M15.5714 0C6.97239 0 0 6.97239 0 15.5714C0 24.1705 6.97239 31.1429 15.5714 31.1429C24.1705 31.1429 31.1429 24.1705 31.1429 15.5714C31.1429 6.97239 24.1705 0 15.5714 0ZM23.0547 11.7377C23.0652 11.901 23.0652 12.0713 23.0652 12.2382C23.0652 17.3406 19.1793 23.2181 12.0783 23.2181C9.88855 23.2181 7.8587 22.582 6.14863 21.4872C6.46145 21.5219 6.76036 21.5358 7.08013 21.5358C8.88753 21.5358 10.5489 20.9241 11.8732 19.8883C10.177 19.8536 8.75198 18.7413 8.26537 17.212C8.85972 17.2989 9.39499 17.2989 10.0067 17.1425C9.13336 16.965 8.34835 16.4907 7.78508 15.8001C7.2218 15.1094 6.91499 14.2451 6.91677 13.3539V13.3052C7.42771 13.5937 8.02902 13.771 8.65813 13.7953C8.12927 13.4429 7.69555 12.9653 7.39542 12.4051C7.0953 11.8449 6.93806 11.2193 6.93763 10.5837C6.93763 9.86422 7.12532 9.2073 7.46247 8.63728C8.43187 9.83063 9.64153 10.8066 11.0128 11.5019C12.3841 12.1971 13.8864 12.596 15.422 12.6726C14.8763 10.0484 16.8366 7.92474 19.1932 7.92474C20.3054 7.92474 21.3064 8.3905 22.012 9.14126C22.8844 8.9779 23.7186 8.65118 24.4624 8.21323C24.1739 9.1065 23.5692 9.86075 22.7663 10.3369C23.5448 10.2535 24.2956 10.038 24.9908 9.73562C24.4659 10.5072 23.809 11.192 23.0547 11.7377Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="hover:cursor-pointer"
            >
              <path
                d="M16.2858 0C13.2061 0 10.1955 0.913248 7.63477 2.62426C5.07406 4.33527 3.07823 6.76719 1.89967 9.6125C0.721102 12.4578 0.412736 15.5887 1.01356 18.6093C1.61439 21.6298 3.09742 24.4044 5.27513 26.5821C7.45283 28.7598 10.2274 30.2428 13.248 30.8436C16.2685 31.4445 19.3994 31.1361 22.2447 29.9575C25.09 28.779 27.5219 26.7832 29.233 24.2224C30.944 21.6617 31.8572 18.6512 31.8572 15.5714C31.8529 11.443 30.2109 7.48484 27.2916 4.56558C24.3724 1.64632 20.4142 0.00435973 16.2858 0ZM27.2502 21.8988C26.4072 23.2463 25.1046 23.956 23.4831 23.956C20.3793 23.956 18.2711 20.1665 16.0387 16.1539C14.4097 13.2252 12.3825 9.58242 10.6876 9.58242C8.82648 9.58242 6.70337 13.9065 6.70337 17.699C6.70337 18.9358 6.92796 19.9449 7.35318 20.6276C7.75145 21.261 8.30244 21.5604 9.0885 21.5604C9.99883 21.5604 11.1128 20.5124 12.4932 18.3398C12.6684 18.0823 12.9369 17.9031 13.2419 17.8402C13.5469 17.7773 13.8644 17.8357 14.1271 18.003C14.3898 18.1702 14.5771 18.4333 14.6491 18.7362C14.7211 19.0392 14.6723 19.3584 14.513 19.626C12.0695 23.4634 10.3297 23.956 9.0885 23.956C7.46697 23.956 6.16436 23.2448 5.32141 21.8988C4.65813 20.8388 4.30777 19.3864 4.30777 17.7065C4.33418 15.3547 4.8975 13.0399 5.95475 10.9389C7.20345 8.51937 8.88487 7.18681 10.6876 7.18681C13.7914 7.18681 15.8995 10.9764 18.1319 14.989C19.7609 17.9161 21.7882 21.5604 23.4831 21.5604C24.2691 21.5604 24.8201 21.261 25.2184 20.6276C25.6436 19.9494 25.8682 18.9358 25.8682 17.699C25.8682 13.9065 23.7451 9.58242 21.884 9.58242C21.3749 9.58242 20.7835 9.92828 20.1262 10.6125C20.0172 10.726 19.8869 10.8168 19.7428 10.8799C19.5986 10.943 19.4435 10.9771 19.2861 10.9802C19.1288 10.9834 18.9724 10.9555 18.8259 10.8982C18.6794 10.8409 18.5456 10.7552 18.4321 10.6462C18.3186 10.5372 18.2278 10.4069 18.1647 10.2627C18.1016 10.1186 18.0675 9.96344 18.0644 9.80612C18.0613 9.6488 18.0891 9.49241 18.1465 9.34588C18.2038 9.19934 18.2894 9.06552 18.3984 8.95207C19.5408 7.76475 20.6802 7.18681 21.884 7.18681C23.6807 7.18681 25.3681 8.51937 26.6183 10.9389C27.6745 13.0376 28.2378 15.3497 28.2653 17.699C28.2638 19.3864 27.9135 20.8388 27.2502 21.8988Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="hover:cursor-pointer"
            >
              <path
                d="M31.5713 15.6105C31.5713 6.99348 24.5953 0 15.9999 0C7.40447 0 0.428467 6.99348 0.428467 15.6105C0.428467 23.1659 5.78504 29.4569 12.8856 30.9087V20.2936H9.77133V15.6105H12.8856V11.7078C12.8856 8.69502 15.3303 6.24418 18.3356 6.24418H22.2285V10.9273H19.1142C18.2578 10.9273 17.557 11.6298 17.557 12.4884V15.6105H22.2285V20.2936H17.557V31.1429C25.4206 30.3623 31.5713 23.7123 31.5713 15.6105Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="hover:cursor-pointer"
            >
              <path
                d="M26.6752 26.5389H22.0635V19.3125C22.0635 17.5892 22.0285 15.3716 19.6603 15.3716C17.2558 15.3716 16.8886 17.2467 16.8886 19.1853V26.5389H12.2769V11.6786H16.7069V13.7042H16.7666C17.3856 12.5363 18.8908 11.3036 21.1396 11.3036C25.8123 11.3036 26.6765 14.3789 26.6765 18.3821L26.6752 26.5389ZM7.06821 9.6452C6.7164 9.64537 6.36801 9.57616 6.04297 9.44153C5.71794 9.3069 5.42265 9.10948 5.174 8.86059C4.92535 8.6117 4.72822 8.31622 4.59391 7.99106C4.45959 7.66589 4.39071 7.31743 4.39123 6.96562C4.39148 6.4359 4.54881 5.91816 4.84332 5.47786C5.13783 5.03756 5.55628 4.69448 6.04578 4.49201C6.53527 4.28953 7.07381 4.23675 7.59329 4.34035C8.11278 4.44394 8.58988 4.69925 8.96426 5.074C9.33865 5.44875 9.5935 5.9261 9.69659 6.44568C9.79968 6.96527 9.74638 7.50376 9.54343 7.99305C9.34048 8.48234 8.99699 8.90047 8.55641 9.19455C8.11582 9.48863 7.59793 9.64546 7.06821 9.6452ZM9.38057 26.5389H4.75586V11.6786H9.38057V26.5389ZM28.9824 0H2.44091C1.17054 0 0.142822 1.00436 0.142822 2.24358V28.8993C0.142822 30.1398 1.17054 31.1429 2.44091 31.1429H28.9785C30.2476 31.1429 31.2857 30.1398 31.2857 28.8993V2.24358C31.2857 1.00436 30.2476 0 28.9785 0H28.9824Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="hover:cursor-pointer"
            >
              <path
                d="M16.4286 0C7.83318 0 0.857178 6.976 0.857178 15.5714C0.857178 24.1669 7.83318 31.1429 16.4286 31.1429C25.024 31.1429 32 24.1669 32 15.5714C32 6.976 25.024 0 16.4286 0ZM23.6537 10.5886C23.4202 13.0489 22.408 19.0283 21.8942 21.7844C21.6762 22.9523 21.2402 23.3416 20.8353 23.3883C19.9322 23.4661 19.247 22.7966 18.375 22.2204C17.0047 21.3173 16.2262 20.7567 14.9026 19.8847C13.361 18.8726 14.3576 18.312 15.2452 17.4089C15.4787 17.1753 19.465 13.5471 19.5429 13.2201C19.5537 13.1706 19.5523 13.1192 19.5387 13.0704C19.5251 13.0215 19.4998 12.9767 19.465 12.9399C19.3716 12.862 19.247 12.8931 19.138 12.9087C18.9979 12.9399 16.8179 14.388 12.5669 17.2531C11.944 17.6736 11.3835 17.8916 10.8852 17.876C10.3246 17.8604 9.26575 17.5646 8.47161 17.2999C7.49061 16.9884 6.72761 16.8171 6.78989 16.2721C6.82103 15.9919 7.21032 15.7116 7.94218 15.4157C12.489 13.4381 15.5099 12.1301 17.0203 11.5073C21.3492 9.701 22.2367 9.38957 22.8285 9.38957C22.953 9.38957 23.2489 9.42071 23.4357 9.57643C23.5915 9.701 23.6382 9.87229 23.6537 9.99686C23.6382 10.0903 23.6693 10.3706 23.6537 10.5886Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
