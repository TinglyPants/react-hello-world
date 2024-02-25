export default function DislikeIcon({ name, isDislike, onClick }) {
    return (
        <div
            className="h-[5vh] rounded-full m-1 group duration-100 cursor-pointer"
            title={name}
            onClick={onClick}
        >
            <svg
                className={`w-[5vh] h-[5vh] p-2 ${
                    isDislike ? "stroke-[#9494FF]" : "stroke-white"
                } group-hover:stroke-[#9494FF] duration-100`}
                viewBox="0 0 24 24"
                fill={isDislike ? "#9494FF" : "none"}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12 6.00011L14 8.00011L10 10.0001L13 13.0001M12 6.00011C10.2006 3.90309 7.19377 3.25515 4.93923 5.17539C2.68468 7.09563 2.36727 10.3062 4.13778 12.5772C5.60984 14.4655 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9816C11.9483 20.0063 12.0393 20.0063 12.1225 19.9816C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4655 19.8499 12.5772C21.6204 10.3062 21.3417 7.07543 19.0484 5.17539C16.7551 3.27535 13.7994 3.90309 12 6.00011Z" />
            </svg>
        </div>
    );
}
