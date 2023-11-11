export default function DividerSecond() {
    return (
        <>
            <div className="row d-flex flex-row flex-nowrap justify-content-evenly w-100 mt-5 mb-3 p-0 divider-second">
                <div
                    className="d-none d-md-block d-lg-block d-xl-block"
                    style={{
                        backgroundImage: "url('/assets2/divider-second-left.jpg')",
                    }}
                >
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <div
                    style={{
                        backgroundImage: "url('/assets2/divider-second.jpg')",
                    }}
                >
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <div
                    className="col d-none d-md-block d-lg-block d-xl-block"
                    style={{
                        backgroundImage: "url('/assets2/divider-second-right.jpg')",
                    }}
                >
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </>
    );
}
