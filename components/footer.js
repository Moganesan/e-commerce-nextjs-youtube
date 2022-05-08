const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-300 flex py-10 justify-center">
        <div className="flex items-center text-gray-800">
          <span className="font-bold">&copy;2022 </span>
          <svg
            class="mb-1"
            width="25"
            height="28"
            viewBox="0 0 25 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_0_1)">
              <path
                d="M8.77391 23.9707C9.03356 24.0748 8.93288 23.8822 8.77391 23.6958C7.91107 22.6838 7.85516 20.4546 9.15693 18.2616C11.3278 14.6046 11.5785 14.1878 11.5785 14.1878C11.5785 14.1878 10.5623 15.6173 12.4669 17.5826C14.3 19.4741 17.3313 21.683 15.7138 23.6648C15.562 23.8508 15.8297 24.0702 16.0876 23.9707C18.0899 23.1989 20.6172 20.918 20.8706 17.8372C20.964 16.8958 21.2333 16.2753 20.5327 14.6121C19.6319 12.5042 17.8334 11.556 17.1926 11.1336C17.001 11.0073 16.7029 11.1192 16.7186 11.3108C16.9053 13.5852 15.7698 14.1624 15.1235 12.8616C14.8654 12.3421 14.7148 11.4435 14.7148 10.3492C14.7148 8.52739 14.0134 6.652 12.4669 5.12804C12.0648 4.73173 11.5942 4.36141 11.0544 4.04561C10.8589 3.93126 10.5756 4.0462 10.5935 4.23216C10.7122 5.4672 10.6047 9.00673 6.48368 13.2354C2.74717 17.1579 4.19506 20.1704 4.70883 20.9863C5.69112 22.5494 7.43583 23.4346 8.77391 23.9707Z"
                fill="url(#paint0_linear_0_1)"
              ></path>
            </g>
            <path
              d="M8.77391 23.9707C9.03356 24.0748 8.93288 23.8822 8.77391 23.6958C7.91107 22.6838 7.85516 20.4546 9.15693 18.2616C11.3278 14.6046 11.5785 14.1878 11.5785 14.1878C11.5785 14.1878 10.5623 15.6173 12.4669 17.5826C14.3 19.4741 17.3313 21.683 15.7138 23.6648C15.562 23.8508 15.8297 24.0702 16.0876 23.9707C18.0899 23.1989 20.6172 20.918 20.8706 17.8372C20.964 16.8958 21.2333 16.2753 20.5327 14.6121C19.6319 12.5042 17.8334 11.556 17.1926 11.1336C17.001 11.0073 16.7029 11.1192 16.7186 11.3108C16.9053 13.5852 15.7698 14.1624 15.1235 12.8616C14.8654 12.3421 14.7148 11.4435 14.7148 10.3492C14.7148 8.52739 14.0134 6.652 12.4669 5.12804C12.0648 4.73173 11.5942 4.36141 11.0544 4.04561C10.8589 3.93126 10.5756 4.0462 10.5935 4.23216C10.7122 5.4672 10.6047 9.00673 6.48368 13.2354C2.74717 17.1579 4.19506 20.1704 4.70883 20.9863C5.69112 22.5494 7.43583 23.4346 8.77391 23.9707Z"
              fill="url(#paint1_linear_0_1)"
            ></path>
            <defs>
              <filter
                id="filter0_f_0_1"
                x="0"
                y="0"
                width="25"
                height="28"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="2"
                  result="effect1_foregroundBlur_0_1"
                ></feGaussianBlur>
              </filter>
              <linearGradient
                id="paint0_linear_0_1"
                x1="-2.10622"
                y1="2.56036"
                x2="19.9637"
                y2="30.3103"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF0000"></stop>
                <stop offset="0.94913" stop-color="#CC00FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_0_1"
                x1="-2.10622"
                y1="2.56036"
                x2="19.9637"
                y2="30.3103"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF0000"></stop>
                <stop offset="0.94913" stop-color="#CC00FF"></stop>
              </linearGradient>
            </defs>
          </svg>{" "}
          <span className="font-bold text-purple-700 underline">
            02Master.com
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
