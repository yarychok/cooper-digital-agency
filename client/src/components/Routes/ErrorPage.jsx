import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page flex ">
            <div className="flex flex-col mx-auto my-20 justify-center items-center">
                <h1 className="font-bold text-5xl mx-auto mt-48 mb-20">Oops!</h1>
                <p className="mx-auto font-semibold text-4xl mb-8">We're sorry, an unexpected error has occurred.</p>
                <p className="mx-80 font-semibold text-xl text-gray-700">
                    {error.statusText || error.message}
                </p>
            </div>
        </div>
    );
}