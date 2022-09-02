
export const AlertError = ({ children }) => {

    return (
        <div className="bg-red-600 font-bold text-center text-white p-2 mb-4 rounded-md">
            <p>{children}</p>
        </div>
    )

}
