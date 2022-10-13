import React, {useState} from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Image,
    Form
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../components/com.css";
import Lanjut from "../components/Lanjut.js";

function Home() {

    const [nama, setNama] = useState("teman...");

    return (
        <>
            <div className=" linbac w-100">
                <Container className="d-flex align-middle justify-content-center vh-100 align-tengah  w-100">
                    <Row className="justify-content-between">
                        <Col md={6}
                            lg={6}
                            className=" justify-content-center px-auto Flex2 Flex2-vertical align-tengah ">
                            <svg width="100%" height="363" viewBox="0 0 330 363" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_8_59)">
                                    <path d="M138.867 168.41C123.364 168.41 108.209 163.821 95.3189 155.222C82.4286 146.623 72.3818 134.401 66.449 120.101C60.5163 105.801 58.964 90.0662 61.9885 74.8858C65.013 59.7053 72.4784 45.7612 83.4407 34.8167C94.403 23.8722 108.37 16.419 123.575 13.3994C138.78 10.3798 154.541 11.9296 168.864 17.8527C183.187 23.7758 195.429 33.8062 204.042 46.6756C212.655 59.5449 217.252 74.6752 217.252 90.1531C217.228 110.901 208.962 130.792 194.268 145.463C179.573 160.134 159.649 168.387 138.867 168.41ZM138.867 13.1281C123.608 13.1281 108.692 17.6455 96.0047 26.1091C83.3174 34.5727 73.4288 46.6024 67.5895 60.6769C61.7501 74.7514 60.2223 90.2385 63.1992 105.18C66.176 120.121 73.5239 133.846 84.3136 144.618C95.1032 155.39 108.85 162.726 123.816 165.698C138.782 168.67 154.294 167.145 168.391 161.315C182.489 155.485 194.538 145.613 203.015 132.946C211.493 120.279 216.018 105.387 216.018 90.1531C215.994 69.7319 207.859 50.1537 193.395 35.7137C178.932 21.2737 159.322 13.1512 138.867 13.1281Z" fill="#F2F2F2"/>
                                    <path d="M144.849 107.277H195.109C195.273 107.277 195.43 107.212 195.546 107.097C195.662 106.981 195.727 106.824 195.727 106.661C195.727 106.497 195.662 106.341 195.546 106.225C195.43 106.11 195.273 106.045 195.109 106.045H144.849C144.685 106.045 144.528 106.11 144.412 106.225C144.296 106.341 144.231 106.497 144.231 106.661C144.231 106.824 144.296 106.981 144.412 107.097C144.528 107.212 144.685 107.277 144.849 107.277Z" fill="#3F3D56"/>
                                    <path d="M207.632 105.428C203.437 105.433 199.415 107.099 196.448 110.061C193.482 113.022 191.813 117.038 191.808 121.226V188.222C191.813 192.411 193.482 196.426 196.448 199.388C199.415 202.35 203.437 204.016 207.632 204.02H311.769C315.965 204.016 319.987 202.35 322.953 199.388C325.92 196.426 327.588 192.411 327.593 188.222V121.226C327.588 117.038 325.92 113.022 322.953 110.061C319.987 107.099 315.965 105.433 311.769 105.428H207.632Z" fill="white"/>
                                    <path d="M311.769 204.637H207.632C203.273 204.632 199.094 202.901 196.012 199.824C192.93 196.746 191.196 192.574 191.191 188.222V121.226C191.196 116.875 192.93 112.702 196.012 109.625C199.094 106.548 203.273 104.817 207.632 104.812H311.769C316.128 104.817 320.307 106.548 323.389 109.625C326.472 112.702 328.205 116.875 328.21 121.226V188.222C328.205 192.574 326.472 196.746 323.389 199.824C320.307 202.901 316.128 204.632 311.769 204.637ZM207.632 106.045C203.6 106.049 199.735 107.65 196.884 110.496C194.034 113.342 192.43 117.201 192.426 121.226V188.222C192.43 192.248 194.034 196.106 196.884 198.953C199.735 201.799 203.6 203.4 207.632 203.404H311.769C315.801 203.4 319.666 201.799 322.517 198.953C325.368 196.106 326.971 192.248 326.976 188.222V121.226C326.971 117.201 325.368 113.342 322.517 110.496C319.666 107.65 315.801 106.049 311.769 106.045H207.632Z" fill="#3F3D56"/>
                                    <path d="M143.063 101.509C141.507 101.779 140.117 102.645 139.19 103.922C138.262 105.2 137.871 106.788 138.099 108.349C138.15 108.666 138.228 108.977 138.331 109.281L107.281 136.601L118.782 144.644L146.223 112.73C147.451 112.207 148.472 111.292 149.126 110.129C149.779 108.965 150.028 107.619 149.834 106.299C149.717 105.549 149.453 104.83 149.057 104.182C148.661 103.534 148.141 102.97 147.527 102.523C146.912 102.076 146.216 101.754 145.477 101.575C144.738 101.396 143.971 101.365 143.22 101.482C143.168 101.49 143.116 101.499 143.063 101.509Z" fill="#A0616A"/>
                                    <path d="M131.285 132.424C131.285 132.424 124.28 140.478 115.75 149.598C115.158 150.226 114.565 150.861 113.954 151.502C108.77 156.986 103.184 162.68 98.3391 167.098C93.1731 171.824 88.8465 175.115 86.748 175.195C86.5733 175.206 86.3979 175.187 86.2296 175.139C79.9526 173.254 85.1248 175.497 82.44 179.323C79.7428 183.156 80.0761 178.128 74.0337 175.139C68.0036 172.151 71.213 175.121 68.806 179.841C68.0591 181.32 61.5044 181.018 52.8636 179.909C51.8884 171.682 50.4688 164.584 50.4688 164.584C50.4512 159.65 50.956 154.728 51.9748 149.9C67.0284 149.629 79.4774 149.474 80.1131 149.672C81.7549 150.171 85.2852 148.908 89.186 146.708C89.7415 146.393 90.7907 145.666 92.1794 144.643C93.4077 143.744 94.8889 142.622 96.5369 141.365C98.3885 139.936 101.542 139.153 102.567 136.664C105.542 129.479 104.523 134.84 105.32 134.507C106.227 134.125 107.832 133.977 108.77 133.429C109.027 133.316 109.238 133.121 109.369 132.874C109.5 132.626 109.543 132.342 109.492 132.067C109.446 131.833 109.367 131.607 109.257 131.395C108.406 129.688 109.702 129.522 110.924 129.343C111.43 129.318 111.924 129.172 112.362 128.918C117.269 125.011 120.984 122.01 120.984 122.01L122.317 123.366L122.324 123.372L130.211 131.346L131.285 132.424Z" fill="#3F3D56"/>
                                    <path d="M124.556 362.244H46.5554C43.2166 362.244 40.5001 358.82 40.5001 354.612V271.864C40.5001 267.656 43.2166 264.233 46.5554 264.233H124.556C127.895 264.233 130.612 267.656 130.612 271.864V354.612C130.612 358.82 127.895 362.244 124.556 362.244Z" fill="#F2F2F2"/>
                                    <path d="M1.87466e-05 362.074C-0.0231547 362.294 0.0407608 362.514 0.178071 362.687C0.315381 362.86 0.515154 362.972 0.73453 363H329.266C329.475 362.951 329.661 362.833 329.794 362.665C329.927 362.497 330 362.289 330 362.074C330 361.86 329.927 361.652 329.794 361.484C329.661 361.316 329.475 361.198 329.266 361.149H0.734492C0.515126 361.176 0.315372 361.289 0.178071 361.462C0.0407701 361.635 -0.0231473 361.855 1.87466e-05 362.074Z" fill="#CCCCCC"/>
                                    <path d="M178.72 350.768L186.584 350.767L190.326 320.482L178.719 320.483L178.72 350.768Z" fill="#A0616A"/>
                                    <path d="M178.443 358.959L202.627 358.958V358.653C202.627 356.16 201.635 353.77 199.87 352.008C198.105 350.245 195.711 349.255 193.214 349.255H193.214L188.796 345.909L180.554 349.255L178.443 349.256L178.443 358.959Z" fill="#2F2E41"/>
                                    <path d="M129.873 347.158L137.443 349.285L149.266 321.145L138.093 318.005L129.873 347.158Z" fill="#A0616A"/>
                                    <path d="M127.383 354.967L150.662 361.51L150.745 361.216C151.422 358.817 151.116 356.248 149.895 354.074C148.674 351.9 146.638 350.299 144.235 349.623L144.235 349.623L140.891 345.207L132.049 346.198L130.017 345.627L127.383 354.967Z" fill="#2F2E41"/>
                                    <path d="M109.72 218.193C109.72 218.193 107.202 217.943 113.658 220.173C120.645 222.595 131.248 222.281 141.401 225.916C144.537 227.038 147.715 228.184 150.869 229.33C151.505 229.558 152.141 229.792 152.777 230.02C156.881 231.518 160.917 233.015 164.732 234.445C165.269 234.648 165.8 234.851 166.324 235.048C166.336 235.055 166.349 235.055 166.355 235.061C178.792 239.781 188.574 243.823 190.191 245.438C191.92 247.163 192.635 258.821 192.833 273.228C193.191 299.928 191.778 336.074 191.778 336.074L177.23 336.019C177.23 336.019 177.138 335.699 176.959 335.101C176.638 333.998 176.039 331.946 175.243 329.265C171.935 318.069 165.275 295.88 161.596 285.719C160.559 282.847 159.757 280.937 159.331 280.506C156.862 277.979 159.331 276.864 161.8 275.262C164.269 273.66 161.8 273.167 159.985 271.072C158.171 268.976 160.664 264.256 160.664 264.256C160.664 264.256 159.023 264.213 156.406 264.145C152.542 264.047 146.53 263.899 140.513 263.751C140.507 263.757 140.507 263.757 140.507 263.751C138.241 263.696 135.976 263.64 133.828 263.591C132.162 263.548 130.563 263.511 129.082 263.474C124.644 263.375 121.287 263.307 120.447 263.307C117.707 263.307 119.836 263.307 118.182 261.145C117.928 260.821 117.654 260.515 117.361 260.226C116.947 259.765 116.492 259.34 116.004 258.957C115.658 258.797 116.127 259.789 115.868 261.077C115.726 261.775 115.395 262.421 114.911 262.944C112.461 265.661 104.943 262.728 104.943 262.728C92.5745 268.903 82.4277 268.459 74.6139 265.569C69.0011 263.41 63.9665 259.98 59.906 255.55C58.2988 253.862 56.8563 252.026 55.5979 250.065L54.5795 249.874C54.5795 249.874 53.2092 204.039 54.7893 200.94C57.2519 196.109 93.6731 199.707 93.6731 199.707L109.72 218.193Z" fill="#2F2E41"/>
                                    <path d="M177.56 32.7169H227.821C227.985 32.7169 228.142 32.652 228.258 32.5364C228.373 32.4208 228.438 32.2641 228.438 32.1007C228.438 31.9373 228.373 31.7805 228.258 31.665C228.142 31.5494 227.985 31.4845 227.821 31.4845H177.56C177.397 31.4845 177.24 31.5494 177.124 31.665C177.008 31.7805 176.943 31.9373 176.943 32.1007C176.943 32.2641 177.008 32.4208 177.124 32.5364C177.24 32.652 177.397 32.7169 177.56 32.7169Z" fill="#3F3D56"/>
                                    <path d="M245.608 81.7215C235.417 68.189 229.528 53.0563 229.335 35.8037C229.006 34.8739 229.061 33.8521 229.486 32.9625C229.911 32.0728 230.673 31.3878 231.603 31.0579L266.338 18.7879C267.269 18.4601 268.293 18.5145 269.184 18.9391C270.075 19.3638 270.761 20.124 271.091 21.053L287.365 66.9708C287.693 67.9006 287.639 68.9224 287.213 69.8121C286.788 70.7018 286.027 71.3867 285.096 71.7166L250.361 83.9867C249.43 84.3145 248.407 84.2601 247.516 83.8354C246.624 83.4108 245.938 82.6505 245.608 81.7215Z" fill="#E6E6E6"/>
                                    <path d="M243.357 66.9112C237.228 60.7244 234.605 49.6898 232.895 37.3911C232.587 36.5203 232.639 35.5634 233.037 34.7302C233.435 33.8969 234.148 33.2555 235.02 32.9465L264.871 22.4015C265.743 22.0944 266.702 22.1454 267.537 22.543C268.371 22.9407 269.014 23.6527 269.323 24.5227L283.804 65.3834C284.112 66.2541 284.061 67.2111 283.662 68.0444C283.264 68.8776 282.551 69.519 281.679 69.828L263.187 76.3604C259.302 77.7279 255.033 77.501 251.315 75.7295C247.597 73.9581 244.735 70.7867 243.357 66.9112Z" fill="white"/>
                                    <path d="M269.723 46.5346L246.469 54.8214C246.286 54.8867 246.092 54.9153 245.897 54.9056C245.703 54.896 245.513 54.8482 245.337 54.765C245.161 54.6818 245.003 54.5649 244.873 54.4209C244.742 54.2769 244.641 54.1086 244.576 53.9257C244.511 53.7427 244.482 53.5488 244.492 53.3548C244.501 53.1608 244.549 52.9706 244.633 52.7951C244.716 52.6196 244.833 52.4621 244.977 52.3318C245.121 52.2015 245.29 52.1008 245.473 52.0355L268.727 43.7487C268.91 43.6834 269.104 43.6548 269.299 43.6644C269.493 43.6741 269.683 43.7219 269.859 43.8051C270.035 43.8883 270.193 44.0052 270.323 44.1492C270.454 44.2932 270.555 44.4615 270.62 44.6444C270.685 44.8273 270.714 45.0213 270.704 45.2153C270.695 45.4093 270.647 45.5995 270.563 45.775C270.48 45.9505 270.363 46.1079 270.219 46.2383C270.075 46.3686 269.906 46.4693 269.723 46.5346Z" fill="#9381FF"/>
                                    <path d="M248.854 45.3593L243.738 47.1824C243.368 47.3138 242.961 47.2932 242.606 47.1251C242.252 46.9571 241.978 46.6553 241.846 46.2861C241.714 45.917 241.735 45.5106 241.903 45.1562C242.07 44.8019 242.372 44.5287 242.742 44.3965L247.858 42.5734C248.228 42.4415 248.635 42.4618 248.99 42.6298C249.345 42.7978 249.619 43.0997 249.751 43.4691C249.883 43.8386 249.863 44.2452 249.695 44.5997C249.526 44.9542 249.224 45.2274 248.854 45.3593Z" fill="#9381FF"/>
                                    <path d="M274.102 58.782L250.848 67.0689C250.665 67.1342 250.471 67.1628 250.276 67.1531C250.082 67.1434 249.892 67.0956 249.716 67.0125C249.54 66.9293 249.382 66.8124 249.252 66.6683C249.121 66.5243 249.02 66.3561 248.955 66.1731C248.89 65.9902 248.861 65.7962 248.871 65.6022C248.88 65.4082 248.928 65.2181 249.011 65.0425C249.095 64.867 249.212 64.7096 249.356 64.5793C249.5 64.449 249.669 64.3483 249.852 64.283L273.106 55.9962C273.289 55.9306 273.483 55.9018 273.678 55.9113C273.872 55.9209 274.063 55.9686 274.239 56.0517C274.415 56.1349 274.573 56.2518 274.703 56.3959C274.834 56.54 274.935 56.7083 275 56.8914C275.066 57.0744 275.094 57.2685 275.085 57.4627C275.075 57.6568 275.027 57.8471 274.943 58.0226C274.86 58.1982 274.743 58.3557 274.598 58.486C274.454 58.6163 274.285 58.7169 274.102 58.782H274.102Z" fill="#9381FF"/>
                                    <path d="M271.912 52.6583L248.659 60.9451C248.289 61.077 247.881 61.0567 247.526 60.8887C247.171 60.7207 246.898 60.4188 246.766 60.0494C246.633 59.68 246.654 59.2733 246.822 58.9188C246.99 58.5643 247.293 58.2911 247.663 58.1592L270.916 49.8724C271.286 49.741 271.693 49.7616 272.048 49.9296C272.403 50.0977 272.676 50.3995 272.808 50.7687C272.94 51.1378 272.92 51.5442 272.752 51.8986C272.584 52.2529 272.282 52.5261 271.912 52.6583Z" fill="#9381FF"/>
                                    <path d="M231.309 40.7275C234.718 40.7275 237.481 37.9687 237.481 34.5655C237.481 31.1623 234.718 28.4035 231.309 28.4035C227.901 28.4035 225.137 31.1623 225.137 34.5655C225.137 37.9687 227.901 40.7275 231.309 40.7275Z" fill="#9381FF"/>
                                    <path d="M119.648 21.0091H69.3871C69.2234 21.0091 69.0664 20.9442 68.9507 20.8286C68.8349 20.7131 68.7699 20.5563 68.7699 20.3929C68.7699 20.2295 68.8349 20.0727 68.9507 19.9572C69.0664 19.8416 69.2234 19.7767 69.3871 19.7767H119.648C119.812 19.7767 119.969 19.8416 120.084 19.9572C120.2 20.0727 120.265 20.2295 120.265 20.3929C120.265 20.5563 120.2 20.7131 120.084 20.8286C119.969 20.9442 119.812 21.0091 119.648 21.0091Z" fill="#3F3D56"/>
                                    <path d="M4.39168 42.8666C8.75678 26.5068 17.0388 12.535 30.5095 1.72678C31.0391 0.894706 31.8776 0.306337 32.8412 0.0907376C33.8047 -0.124862 34.8146 0.0499209 35.6492 0.576742L66.7695 20.2694C67.6029 20.7981 68.1922 21.6353 68.4082 22.5973C68.6241 23.5593 68.4491 24.5675 67.9214 25.4007L41.8035 66.5406C41.274 67.3726 40.4354 67.961 39.4719 68.1766C38.5084 68.3922 37.4985 68.2175 36.6639 67.6906L5.54359 47.9979C4.71016 47.4692 4.12083 46.6321 3.90488 45.6701C3.68893 44.7081 3.864 43.6999 4.39168 42.8666Z" fill="#E6E6E6"/>
                                    <path d="M14.6675 31.9512C15.7551 23.3175 22.8266 14.4418 31.4584 5.50279C31.9543 4.72351 32.7397 4.17246 33.6421 3.97054C34.5444 3.76863 35.4902 3.93233 36.2719 4.42574L63.0171 21.35C63.7977 21.8451 64.3496 22.6291 64.5519 23.5301C64.7542 24.431 64.5902 25.3753 64.0961 26.1557L40.8547 62.7645C40.3588 63.5438 39.5734 64.0948 38.671 64.2967C37.7686 64.4986 36.8228 64.3349 36.0412 63.8415L19.473 53.3573C15.9962 51.1517 13.5377 47.6593 12.6368 43.6463C11.7359 39.6333 12.4662 35.4273 14.6675 31.9512Z" fill="white"/>
                                    <path d="M47.0041 40.0658L26.1131 26.9271C25.7811 26.7178 25.5459 26.3855 25.4592 26.0032C25.3725 25.6209 25.4413 25.2198 25.6506 24.8882C25.8599 24.5565 26.1924 24.3213 26.5753 24.2343C26.9581 24.1474 27.3599 24.2157 27.6924 24.4243L48.5833 37.563C48.7481 37.6664 48.8909 37.8012 49.0035 37.9598C49.1161 38.1183 49.1963 38.2975 49.2395 38.487C49.2827 38.6765 49.288 38.8727 49.2552 39.0642C49.2225 39.2558 49.1522 39.4391 49.0484 39.6035C48.9447 39.768 48.8095 39.9104 48.6505 40.0226C48.4916 40.1349 48.3121 40.2148 48.1222 40.2577C47.9324 40.3006 47.7359 40.3058 47.544 40.2729C47.3522 40.2399 47.1687 40.1696 47.0041 40.0658Z" fill="#9381FF"/>
                                    <path d="M35.0394 22.9547L30.4434 20.0642C30.2786 19.9608 30.1358 19.8259 30.0232 19.6674C29.9106 19.5088 29.8304 19.3297 29.7872 19.1402C29.744 18.9507 29.7387 18.7545 29.7714 18.5629C29.8042 18.3713 29.8745 18.1881 29.9783 18.0236C30.082 17.8592 30.2172 17.7168 30.3762 17.6045C30.5351 17.4923 30.7146 17.4124 30.9045 17.3695C31.0943 17.3265 31.2908 17.3214 31.4827 17.3543C31.6745 17.3872 31.858 17.4576 32.0226 17.5614L36.6186 20.4519C36.7834 20.5553 36.9262 20.6902 37.0388 20.8487C37.1514 21.0073 37.2316 21.1864 37.2748 21.3759C37.318 21.5654 37.3234 21.7616 37.2906 21.9532C37.2578 22.1447 37.1875 22.328 37.0838 22.4924C36.98 22.6569 36.8448 22.7993 36.6859 22.9115C36.5269 23.0238 36.3474 23.1037 36.1576 23.1466C35.9677 23.1895 35.7712 23.1947 35.5793 23.1618C35.3875 23.1288 35.204 23.0585 35.0394 22.9547Z" fill="#9381FF"/>
                                    <path d="M40.0614 51.0689L19.1705 37.9302C19.0057 37.8268 18.8629 37.692 18.7503 37.5334C18.6377 37.3749 18.5575 37.1957 18.5143 37.0062C18.4711 36.8167 18.4657 36.6205 18.4985 36.4289C18.5313 36.2374 18.6016 36.0541 18.7054 35.8897C18.8091 35.7252 18.9443 35.5828 19.1032 35.4706C19.2622 35.3583 19.4417 35.2784 19.6316 35.2355C19.8214 35.1926 20.0179 35.1874 20.2098 35.2203C20.4016 35.2533 20.5851 35.3236 20.7497 35.4274L41.6406 48.5661C41.9726 48.7754 42.2078 49.1077 42.2946 49.49C42.3813 49.8723 42.3125 50.2733 42.1032 50.605C41.8939 50.9367 41.5613 51.1719 41.1785 51.2588C40.7956 51.3458 40.3939 51.2775 40.0614 51.0689Z" fill="#9381FF"/>
                                    <path d="M43.5328 45.5674L22.6418 32.4286C22.477 32.3252 22.3342 32.1904 22.2216 32.0318C22.109 31.8733 22.0288 31.6941 21.9856 31.5046C21.9424 31.3151 21.9371 31.1189 21.9699 30.9274C22.0026 30.7358 22.0729 30.5525 22.1767 30.3881C22.2804 30.2236 22.4156 30.0812 22.5746 29.969C22.7335 29.8567 22.913 29.7769 23.1029 29.7339C23.2927 29.691 23.4892 29.6858 23.6811 29.7188C23.8729 29.7517 24.0564 29.822 24.221 29.9258L45.112 43.0645C45.4444 43.2736 45.6801 43.606 45.7671 43.9885C45.854 44.371 45.7853 44.7724 45.5759 45.1043C45.4722 45.2686 45.3371 45.411 45.1783 45.5232C45.0195 45.6354 44.8401 45.7153 44.6504 45.7583C44.2672 45.8451 43.8652 45.7765 43.5328 45.5674L43.5328 45.5674Z" fill="#9381FF"/>
                                    <path d="M65.8989 29.0197C69.3076 29.0197 72.071 26.2609 72.071 22.8577C72.071 19.4545 69.3076 16.6957 65.8989 16.6957C62.4902 16.6957 59.7269 19.4545 59.7269 22.8577C59.7269 26.2609 62.4902 29.0197 65.8989 29.0197Z" fill="#9381FF"/>
                                    <path d="M198.598 115.288C202.006 115.288 204.77 112.529 204.77 109.126C204.77 105.723 202.006 102.964 198.598 102.964C195.189 102.964 192.426 105.723 192.426 109.126C192.426 112.529 195.189 115.288 198.598 115.288Z" fill="#9381FF"/>
                                    <path d="M169.705 263.103C167.132 277.103 156.226 309.916 149.634 329.123C146.628 337.898 146.381 334.595 146.381 334.595L142.956 333.516L137.179 331.693L135.068 331.027L132.513 330.22C132.513 330.22 131.26 307.901 130.859 291.159C130.723 285.761 130.488 281.904 130.099 281.139C128.495 277.997 131.18 277.664 134.013 276.869C136.852 276.074 134.636 274.879 133.531 272.328C132.784 270.627 134.253 268.366 135.296 267.072C135.584 266.708 135.891 266.36 136.216 266.03C136.216 266.03 128.995 263.578 120.829 260.811C120.823 260.817 120.823 260.811 120.823 260.811C120.002 260.534 119.175 260.256 118.348 259.973C121.224 258.938 123.137 258.137 123.569 257.712C126.1 255.247 127.217 257.712 128.822 260.176C130.427 262.641 130.92 260.176 133.019 258.365C135.117 256.553 139.845 259.043 139.845 259.043C139.845 259.043 139.888 257.403 139.956 254.791C140.055 250.933 140.203 244.932 140.351 238.924C140.345 238.917 140.345 238.917 140.351 238.917C140.407 236.656 140.462 234.395 140.512 232.25C144.863 235.578 149.085 238.844 152.911 241.863C152.917 241.869 152.93 241.875 152.93 241.888C162.132 249.146 169.039 254.976 170.008 256.824C170.446 257.662 170.298 259.887 169.705 263.103Z" fill="#2F2E41"/>
                                    <path d="M110.338 210.799L108.066 212.271L102.252 216.043L94.3643 221.151L52.3205 248.387C52.3205 248.387 47.1236 237.813 51.8822 228.619C52.4947 227.456 52.9928 226.236 53.3697 224.977C55.2954 218.384 51.5922 215.525 51.5922 215.525C51.5922 215.525 45.4201 209.529 51.3391 204.002C52.555 202.868 53.2339 200.545 53.5425 197.563C54.061 192.658 53.5857 185.978 52.8636 179.909C51.8884 171.682 50.4688 164.584 50.4688 164.584C50.4512 159.65 50.956 154.728 51.9748 149.9C53.1043 144.699 54.9189 139.757 57.6037 135.653C58.5884 134.13 59.7235 132.71 60.9922 131.414C62.7674 129.597 64.8454 128.102 67.1333 126.995C70.565 125.344 76.4469 126.336 81.6314 127.057C82.6745 127.199 83.6867 127.334 84.6434 127.433C85.5921 127.543 86.546 127.603 87.501 127.612L89.6489 135.437L90.4636 138.401L90.871 139.886L91.7968 143.263L92.1794 144.643L98.3391 167.098L103.369 185.411L106.147 195.529L110.301 210.657L110.338 210.799Z" fill="#3F3D56"/>
                                    <path d="M75.9273 122.223C86.2745 122.223 94.6626 113.849 94.6626 103.518C94.6626 93.1879 86.2745 84.8134 75.9273 84.8134C65.5801 84.8134 57.192 93.1879 57.192 103.518C57.192 113.849 65.5801 122.223 75.9273 122.223Z" fill="#A0616A"/>
                                    <path d="M72.4178 118.98L70.8917 123.851C67.5078 122.184 64.0784 120.486 61.2607 117.979C58.443 115.473 56.2636 112.014 56.1302 108.249C56.0613 106.304 56.533 104.343 56.2094 102.424C55.8437 100.256 54.5032 98.3759 53.8896 96.2643C53.3156 94.0525 53.5317 91.7101 54.5007 89.6401C55.4696 87.5702 57.1309 85.9021 59.1986 84.9229C62.3042 83.5603 65.8555 83.9428 69.2317 83.6134C72.608 83.2841 76.3741 81.7593 77.3244 78.5081C77.6797 77.2925 77.639 75.8593 78.7267 75.0634C79.2733 74.6986 79.9357 74.5488 80.5864 74.6427C81.2371 74.7366 81.8299 75.0677 82.2506 75.572C83.8407 77.3743 83.4493 79.7475 83.0328 81.9052C85.2224 81.6198 87.328 80.8808 89.2148 79.7356C91.1015 78.5903 92.7278 77.0641 93.9893 75.2548C94.5816 75.8086 95.0581 76.474 95.3912 77.2127C95.7244 77.9515 95.9075 78.7488 95.9301 79.5586C95.9527 80.3684 95.8143 81.1747 95.5229 81.9308C95.2315 82.6869 94.7929 83.3778 94.2324 83.9636C95.297 83.9641 96.3307 83.6063 97.1666 82.9481C98.0026 82.2899 98.592 81.3697 98.8397 80.336C100.133 82.1189 101.46 83.9783 101.875 86.1399C102.291 88.3016 101.519 90.8583 99.5338 91.8149C98.5203 92.2147 97.4326 92.3925 96.3443 92.3363L88.0199 92.4942C85.5444 92.5411 83.1843 93.5477 81.4389 95.3008C79.6934 97.054 78.6995 99.4163 78.6674 101.888C76.2456 101.656 73.7512 101.428 71.461 102.447C70.3942 102.895 69.4952 103.666 68.8907 104.652C67.3771 107.247 68.8787 109.945 70.2096 112.306C71.3472 114.324 72.4256 116.754 71.4816 118.87" fill="#2F2E41"/>
                                    <path d="M157.943 308.9L123.209 296.63C122.278 296.3 121.517 295.615 121.092 294.725C120.666 293.835 120.612 292.814 120.94 291.884L137.213 245.966C137.544 245.037 138.23 244.277 139.121 243.852C140.012 243.427 141.036 243.373 141.967 243.701L176.702 255.971C177.632 256.301 178.394 256.986 178.819 257.875C179.244 258.765 179.299 259.787 178.97 260.717C178.777 277.969 172.887 293.102 162.697 306.634C162.367 307.563 161.68 308.324 160.789 308.748C159.898 309.173 158.875 309.227 157.943 308.9Z" fill="#E6E6E6"/>
                                    <path d="M145.118 301.273L126.625 294.741C125.754 294.432 125.041 293.791 124.642 292.957C124.244 292.124 124.193 291.167 124.5 290.296L138.982 249.436C139.291 248.566 139.934 247.854 140.768 247.456C141.603 247.058 142.561 247.007 143.434 247.314L173.285 257.859C174.157 258.168 174.87 258.81 175.268 259.643C175.666 260.476 175.717 261.433 175.41 262.304C173.7 274.603 171.077 285.637 164.948 291.824C163.569 295.7 160.707 298.871 156.99 300.643C153.272 302.414 149.003 302.641 145.118 301.273Z" fill="white"/>
                                    <path d="M137.685 269.557C137.817 269.188 138.091 268.887 138.446 268.719C138.801 268.551 139.208 268.53 139.578 268.662L162.832 276.948C163.015 277.014 163.184 277.114 163.328 277.245C163.473 277.375 163.59 277.532 163.673 277.708C163.757 277.883 163.805 278.074 163.815 278.268C163.824 278.462 163.796 278.656 163.73 278.839C163.665 279.022 163.564 279.191 163.433 279.335C163.303 279.479 163.145 279.596 162.969 279.679C162.793 279.762 162.602 279.81 162.408 279.819C162.213 279.829 162.019 279.8 161.836 279.734L138.582 271.448C138.212 271.315 137.91 271.042 137.742 270.688C137.574 270.333 137.553 269.927 137.685 269.557Z" fill="#9381FF"/>
                                    <path d="M158.554 268.382C158.686 268.013 158.96 267.711 159.315 267.543C159.67 267.375 160.077 267.355 160.447 267.486L165.563 269.309C165.746 269.375 165.915 269.475 166.059 269.606C166.203 269.736 166.32 269.894 166.403 270.069C166.487 270.245 166.535 270.435 166.544 270.629C166.554 270.823 166.525 271.017 166.46 271.2C166.395 271.383 166.294 271.551 166.163 271.695C166.033 271.839 165.875 271.956 165.699 272.039C165.523 272.122 165.333 272.17 165.139 272.18C164.944 272.189 164.75 272.161 164.567 272.095L159.451 270.272C159.081 270.14 158.779 269.867 158.611 269.512C158.443 269.158 158.422 268.752 158.554 268.382Z" fill="#9381FF"/>
                                    <path d="M133.306 281.805C133.438 281.436 133.712 281.134 134.067 280.966C134.422 280.798 134.829 280.778 135.199 280.909L158.453 289.196C158.636 289.261 158.805 289.362 158.949 289.492C159.094 289.622 159.211 289.78 159.295 289.955C159.378 290.131 159.426 290.321 159.436 290.515C159.445 290.709 159.417 290.904 159.351 291.087C159.286 291.27 159.185 291.438 159.054 291.582C158.924 291.726 158.766 291.843 158.59 291.926C158.414 292.009 158.223 292.057 158.029 292.067C157.834 292.076 157.64 292.047 157.457 291.982L134.203 283.695C133.833 283.563 133.531 283.289 133.363 282.935C133.195 282.581 133.174 282.174 133.306 281.805Z" fill="#9381FF"/>
                                    <path d="M135.495 275.681C135.628 275.312 135.902 275.01 136.257 274.842C136.611 274.674 137.019 274.654 137.389 274.785L160.642 283.072C160.826 283.137 160.994 283.238 161.139 283.368C161.283 283.499 161.4 283.656 161.484 283.832C161.567 284.007 161.615 284.197 161.625 284.392C161.635 284.586 161.606 284.78 161.541 284.963C161.475 285.146 161.374 285.314 161.244 285.458C161.113 285.602 160.955 285.719 160.779 285.803C160.603 285.886 160.413 285.933 160.218 285.943C160.024 285.952 159.829 285.924 159.646 285.858L136.393 277.571C136.023 277.439 135.721 277.166 135.553 276.811C135.384 276.457 135.364 276.051 135.495 275.681Z" fill="#9381FF"/>
                                    <path d="M147.414 244.369C146.969 242.855 145.95 241.574 144.574 240.799C143.198 240.024 141.573 239.816 140.045 240.218C139.736 240.305 139.434 240.417 139.144 240.554L108.442 212.845L101.739 225.163L136.604 248.772C137.264 249.932 138.29 250.841 139.521 251.358C140.753 251.874 142.122 251.969 143.413 251.628C144.146 251.426 144.832 251.083 145.432 250.617C146.032 250.15 146.534 249.571 146.91 248.911C147.286 248.251 147.527 247.524 147.622 246.771C147.716 246.018 147.66 245.253 147.459 244.521C147.445 244.47 147.43 244.42 147.414 244.369Z" fill="#A0616A"/>
                                    <path d="M124.509 224.786L123.311 226.265L116.263 234.997L115.312 236.18C115.312 236.18 105.246 229.279 94.3643 221.151C81.3043 211.384 67.0716 199.843 67.7073 196.324C68.8739 189.885 67.2259 195.264 63.1092 193.034C58.9986 190.797 64.035 190.557 66.3248 184.228C68.6208 177.906 66.0286 181.424 61.0601 179.576C57.7457 178.343 59.48 150.072 60.9922 131.414C62.7674 129.597 64.8454 128.102 67.1334 126.995C71.2501 125.011 78.9096 126.841 84.6434 127.433C87.8899 151.323 92.5745 186.268 92.3646 187.371C92.0437 189.053 93.7101 192.411 96.3394 196.035C97.5738 197.748 103.937 204.261 110.301 210.657C117.398 217.793 124.509 224.786 124.509 224.786Z" fill="#3F3D56"/>
                                    <path d="M275.835 136.837H210.487C210.302 136.838 210.118 136.802 209.947 136.731C209.776 136.661 209.62 136.557 209.489 136.426C209.358 136.296 209.254 136.141 209.183 135.97C209.111 135.799 209.075 135.616 209.075 135.431C209.075 135.246 209.111 135.062 209.183 134.891C209.254 134.721 209.358 134.565 209.489 134.435C209.62 134.304 209.776 134.2 209.947 134.13C210.118 134.059 210.302 134.023 210.487 134.024H275.835C276.208 134.024 276.565 134.173 276.829 134.437C277.093 134.7 277.241 135.058 277.241 135.431C277.241 135.803 277.093 136.161 276.829 136.424C276.565 136.688 276.208 136.837 275.835 136.837Z" fill="#9381FF"/>
                                    <path d="M308.915 149.7H210.487C210.302 149.7 210.118 149.664 209.947 149.594C209.776 149.523 209.62 149.42 209.489 149.289C209.358 149.158 209.254 149.003 209.183 148.832C209.111 148.661 209.075 148.478 209.075 148.293C209.075 148.108 209.111 147.925 209.183 147.754C209.254 147.583 209.358 147.428 209.489 147.297C209.62 147.167 209.776 147.063 209.947 146.992C210.118 146.922 210.302 146.886 210.487 146.886H308.915C309.288 146.887 309.645 147.036 309.909 147.299C310.173 147.563 310.321 147.921 310.321 148.293C310.321 148.666 310.173 149.023 309.909 149.287C309.645 149.551 309.288 149.699 308.915 149.7Z" fill="#F2F2F2"/>
                                    <path d="M308.916 159.747H210.485C210.111 159.747 209.752 159.895 209.488 160.159C209.223 160.423 209.075 160.781 209.075 161.155C209.075 161.528 209.223 161.886 209.488 162.15C209.752 162.414 210.111 162.563 210.485 162.563H308.916C309.29 162.563 309.649 162.414 309.914 162.15C310.178 161.886 310.327 161.528 310.327 161.155C310.327 160.781 310.178 160.423 309.914 160.159C309.649 159.895 309.29 159.747 308.916 159.747Z" fill="#F2F2F2"/>
                                    <path d="M308.915 175.425H210.487C210.302 175.426 210.118 175.39 209.947 175.319C209.776 175.249 209.62 175.145 209.489 175.014C209.358 174.884 209.254 174.728 209.183 174.557C209.111 174.387 209.075 174.203 209.075 174.018C209.075 173.833 209.111 173.65 209.183 173.479C209.254 173.308 209.358 173.153 209.489 173.022C209.62 172.892 209.776 172.788 209.947 172.718C210.118 172.647 210.302 172.611 210.487 172.611H308.915C309.288 172.612 309.645 172.761 309.909 173.025C310.173 173.288 310.321 173.646 310.321 174.018C310.321 174.391 310.173 174.748 309.909 175.012C309.645 175.276 309.288 175.425 308.915 175.425Z" fill="#F2F2F2"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_8_59">
                                        <rect width="330" height="363" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Col>
                        <Col md={6}
                            lg={6}
                            className=" Flex2  Flex2-vertical justify-konten-tengah ">
                            <div>
                                <h1 className="h1 my-3 text-end  align-tengah Judul  ">Hai, {nama}</h1>
                                <p className="p my-3 text-end  align-tengah ">

                                    <br/>
                                    <Form.Label htmlFor="inputName">
                                        Aku Stephen,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        kalo kamu ?
                                    </Form.Label>

                                    <Form.Control type="text" id="inputName"
                                        onChange={
                                            (typing) => {
                                                setNama(typing.target.value)

                                            }
                                        }/>

                                </p>
                        </div>
                        <div className="d-flex justify-content-center align-tengah ">
                            <Lanjut link="/closer" isi="Kenalan"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    );
}

export default Home;