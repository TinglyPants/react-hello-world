export default function SvgIcon({ name, onClick, path }) {
    return (
        <div
            className="h-[5vh] rounded-full m-1 group duration-100 cursor-pointer"
            onClick={onClick}
            title={name}
        >
            <svg
                className="w-[5vh] h-[5vh] p-2 stroke-white group-hover:stroke-highlight duration-100"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d={path} />
            </svg>
        </div>
    );
}
