import { useThemeStore } from "@store/index";

import styles from "./LauncherSvg.module.css";

const LauncherSvg = (): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <svg
      className={styles.launcherSvg}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.0146 84.6973L56.1973 85.1752C56.2542 85.3294 56.34 85.5362 56.4136 85.7536L56.6791 86.5178C56.783 86.8101 56.8675 87.1054 56.9782 87.4475C57.0838 87.7849 57.2087 88.1625 57.3066 88.5339L57.6484 89.7561C57.7611 90.1821 57.8557 90.6098 57.9697 91.0757C58.4582 93.0876 58.8052 95.1311 59.0082 97.1914C59.1247 98.2879 59.1742 99.3809 59.1985 100.505C59.2002 101.606 59.1737 102.736 59.0706 103.839C58.9694 104.936 58.8028 106.026 58.5715 107.104C58.3396 108.161 58.0334 109.201 57.6553 110.215C56.9014 112.226 55.844 114.084 54.4705 115.727C53.791 116.556 52.997 117.295 52.2103 118.06C51.4124 118.814 50.5959 119.569 49.7436 120.3C48.0202 121.796 46.2195 123.2 44.349 124.507C42.4601 125.835 40.4733 127.066 38.4353 128.195C37.4144 128.755 36.3799 129.289 35.3326 129.798C34.2887 130.3 33.2328 130.775 32.1657 131.225C30.0372 132.113 27.8927 132.884 25.7664 133.522C23.7137 134.142 21.6317 134.66 19.5279 135.075C15.5046 135.878 11.8118 136.207 9.06705 136.277L8.08568 136.294L7.20439 136.293L5.7776 136.255L4.86295 136.201L4.53975 136.174L4.51186 135.85L4.45826 134.936L4.42025 133.509L4.41943 132.628L4.43639 131.646C4.50666 128.901 4.83533 125.209 5.63787 121.185C6.05289 119.082 6.57123 117 7.191 114.947C7.82947 112.821 8.60029 110.676 9.48814 108.548C9.93786 107.48 10.4135 106.425 10.9147 105.381C11.4233 104.337 11.9565 103.299 12.5184 102.278C13.6474 100.24 14.8779 98.2532 16.2062 96.3643C17.5132 94.4937 18.9174 92.693 20.4131 90.9696C21.1442 90.1173 21.8984 89.3006 22.6528 88.503C23.4181 87.7163 24.1572 86.9222 24.986 86.2427C26.6288 84.8693 28.4869 83.8119 30.4977 83.058C31.5121 82.68 32.5518 82.3738 33.6092 82.1417C34.6865 81.9105 35.7768 81.7438 36.874 81.6427C37.9773 81.5396 39.1072 81.5131 40.2083 81.5147C41.3321 81.5388 42.4248 81.5886 43.5215 81.705C45.5819 81.9079 47.6255 82.2549 49.6372 82.7436C50.1029 82.8573 50.5306 82.9522 50.9569 83.0648L52.1791 83.4066C52.5504 83.5048 52.9283 83.6295 53.2655 83.735C53.6078 83.8455 53.9029 83.9303 54.1952 84.0342L54.9594 84.2997C55.1768 84.3732 55.3835 84.4591 55.5378 84.516C55.8519 84.6349 56.0146 84.6973 56.0146 84.6973Z"
        fill={`var(--${theme})`}
      />
      <path
        d="M21.0164 49.6979L1.1884 69.5259C-0.182072 70.8964 0.788631 73.2398 2.72676 73.2398H19.3914C19.9684 73.2398 20.5218 73.4689 20.9298 73.8769L31.7502 84.6974L49.3243 49.0608H22.5548C22.2691 49.0607 21.9862 49.1169 21.7222 49.2263C21.4583 49.3356 21.2184 49.4958 21.0164 49.6979ZM59.1066 107.349L69.927 118.17C70.335 118.578 70.5641 119.131 70.5641 119.708V136.373C70.5641 138.311 72.9075 139.282 74.278 137.911L94.106 118.083C94.514 117.675 94.7431 117.122 94.7431 116.545V89.7754L59.1066 107.349Z"
        fill={`var(--${theme})`}
      />
      <path
        d="M138.263 4.88781L138.284 5.06199C138.297 5.17656 138.322 5.3532 138.34 5.57113C138.376 6.00672 138.457 6.68156 138.496 7.49422C138.619 9.16602 138.702 11.5195 138.644 14.3509C138.588 17.184 138.388 20.4934 137.955 24.0859C137.859 24.9953 137.72 25.8957 137.587 26.8314C137.463 27.7767 137.287 28.7001 137.126 29.6678C136.795 31.5947 136.382 33.5555 135.905 35.5557C134.912 39.7069 133.652 43.7895 132.131 47.7776C130.562 51.8849 128.679 55.9875 126.472 59.9729C124.262 63.955 121.747 67.8391 118.937 71.5311C116.131 75.2266 113.033 78.7334 109.708 82.0141C106.384 85.2951 102.839 88.3543 99.1133 91.1308C98.1817 91.8245 97.2446 92.5068 96.2865 93.1594C95.3388 93.8228 94.3705 94.4572 93.4056 95.0855C91.4663 96.333 89.4861 97.5003 87.4854 98.5957C83.5466 100.75 79.4658 102.635 75.2712 104.236C71.2854 105.753 67.2083 107.019 63.0638 108.025C61.068 108.506 59.1176 108.929 57.194 109.263L55.7778 109.518C55.3086 109.599 54.8326 109.665 54.3704 109.737L52.9992 109.946L51.6391 110.119C48.0661 110.571 44.7785 110.793 41.9662 110.87C39.1569 110.951 36.8169 110.881 35.1642 110.776C34.3597 110.746 33.6893 110.669 33.2589 110.639C33.0431 110.623 32.8679 110.599 32.7547 110.588L32.5821 110.568C31.2745 110.423 30.2828 109.385 30.1433 108.13L30.1242 107.957C30.1127 107.844 30.0889 107.669 30.0731 107.453C30.0427 107.023 29.9656 106.353 29.9352 105.548C29.8308 103.895 29.7613 101.555 29.8415 98.7458C29.9188 95.9335 30.1403 92.6459 30.5923 89.0729L30.7654 87.7129L30.9746 86.3416C31.047 85.8795 31.1135 85.4037 31.1936 84.9342L31.4487 83.5181C31.7826 81.5944 32.2059 79.644 32.6868 77.6482C33.6929 73.5037 34.9585 69.4265 36.4761 65.4408C38.0771 61.2463 39.9615 57.1655 42.1161 53.2266C43.2117 51.2262 44.379 49.2457 45.6262 47.3064C46.2545 46.3415 46.8889 45.3732 47.5523 44.4255C48.205 43.4671 48.8872 42.5303 49.5809 41.5987C52.3574 37.8734 55.4166 34.3275 58.6976 31.0036C61.9783 27.6794 65.4851 24.5811 69.1806 21.7748C72.8726 18.9649 76.7568 16.4504 80.7388 14.2402C84.7242 12.0333 88.8271 10.1504 92.9342 8.58141C96.9223 7.06047 101.005 5.79956 105.156 4.8066C107.156 4.33 109.117 3.91711 111.044 3.58625C112.012 3.4252 112.935 3.24883 113.88 3.12496C114.816 2.99153 115.716 2.85317 116.626 2.75664C120.218 2.32406 123.528 2.12445 126.361 2.06785C129.192 2.00961 131.546 2.09246 133.218 2.21633C134.03 2.25488 134.705 2.33637 135.141 2.37192C135.359 2.38996 135.535 2.41485 135.65 2.42797L135.824 2.44903C137.128 2.60625 138.113 3.63957 138.263 4.88781Z"
        fill="var(--white)"
      />
      <path
        d="M66.4743 74.2376L66.6337 74.6688C66.7226 74.937 66.8423 75.3228 66.9249 75.7527C67.1207 76.6427 67.1855 77.7261 66.8317 78.6683C66.6572 79.1419 66.3346 79.5368 66.0308 80.0142L65.021 81.5332L62.5969 85.1732C61.6343 86.5995 60.6634 88.0202 59.6843 89.4352C58.5931 91.0095 57.4888 92.5748 56.3716 94.1307L54.5915 96.5804L52.742 99.0646C51.4872 100.726 50.2031 102.405 48.8975 104.061C47.6045 105.712 46.2952 107.35 44.9698 108.975C43.6625 110.584 42.3806 112.172 41.119 113.688L39.2681 115.928C38.655 116.651 38.0975 117.401 37.45 118.027C36.8066 118.656 36.0642 119.152 35.2111 119.497C34.3653 119.849 33.4395 120.08 32.5442 120.296C30.8567 120.696 29.1507 121.014 27.4323 121.248C26.6383 121.357 25.8789 121.442 25.1617 121.506C24.4483 121.574 23.7582 121.601 23.1533 121.645C22.5438 121.683 21.9619 121.68 21.4758 121.697C20.9822 121.707 20.5379 121.691 20.1901 121.69C19.8349 121.683 19.551 121.665 19.3654 121.658L19.0739 121.639L19.0542 121.347C19.0479 121.162 19.0301 120.878 19.0222 120.523C19.0217 120.175 19.0055 119.731 19.0154 119.237C19.0323 118.75 19.0293 118.169 19.0679 117.559C19.1111 116.955 19.1384 116.264 19.2062 115.551C19.2702 114.834 19.3555 114.074 19.4644 113.28C19.6987 111.562 20.0165 109.856 20.4165 108.168C20.6325 107.273 20.8638 106.348 21.2157 105.502C21.5603 104.648 22.0563 103.906 22.6857 103.263C23.3114 102.615 24.0614 102.058 24.7852 101.445L27.0252 99.594C28.5409 98.3323 30.1287 97.0502 31.7379 95.7432C33.3443 94.4334 34.9899 93.1162 36.6516 91.8155C38.3083 90.5096 39.9869 89.2258 41.6483 87.971L44.1325 86.1214L46.5823 84.3414C48.1383 83.2242 49.7035 82.1199 51.2777 81.0287C52.7816 79.9866 54.2142 79.0121 55.5398 78.116L59.1798 75.692L60.6987 74.6822C61.1759 74.3784 61.5707 74.0557 62.0446 73.8813C62.9869 73.5275 64.0702 73.5923 64.9603 73.788C65.3901 73.8706 65.7759 73.9904 66.0442 74.0793L66.4743 74.2376Z"
        fill={`var(--${theme})`}
      />
      <path
        d="M99.0153 56.5085C99.0153 64.6889 92.3837 71.3206 84.2032 71.3206C76.0228 71.3206 69.3911 64.6889 69.3911 56.5085C69.3911 48.328 76.0228 41.6964 84.2032 41.6964C92.3837 41.6964 99.0153 48.328 99.0153 56.5085ZM106.461 24.8223C101.253 24.8223 97.0321 29.0436 97.0321 34.2509C97.0321 39.4583 101.253 43.6796 106.461 43.6796C111.668 43.6796 115.889 39.4583 115.889 34.2509C115.889 29.0436 111.668 24.8223 106.461 24.8223Z"
        fill="var(--bg-color)"
      />
    </svg>
  );
};

export default LauncherSvg;
