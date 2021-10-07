import React from "react";
import Loader from "./Loader";

export default function Spinner() {
    return (
        <>
            <div className="spinner">
                <Loader />
            </div>
            <style jsx>
                {`
                    .spinner {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: auto;
                        top: 0;
                        background-color: #0000007a;
                        height: 100%;
                        width: 100%;
                        position: fixed;
                        z-index: 10;
                    }
                `}
            </style>
        </>
    );
}
