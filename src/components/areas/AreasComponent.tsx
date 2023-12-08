import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

function AreasComponent() {
    return (
        <MDBContainer>
            <br></br>
            <h2 className="text-center mt-5">Áreas</h2>
            <hr className="hr hr-blurry w-50 mx-auto"/>

            <MDBRow center>
                <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className="thumbnail">
                        <Link to="/areas/doral/">
                            <div
                                className="propiedades-img m-0 p-0"
                                style={{
                                    background:
                                        "url('https://img1.wsimg.com/isteam/ip/786b303a-2103-4baa-8820-66fa202ca80b/doral.jpg/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <h4 className="text-center card-title m-2">Doral</h4>
                        </Link>
                    </div>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="thumbnail">
                        <Link to="/areas/homestead/">
                            <div
                                className="propiedades-img m-0 p-0"
                                style={{
                                    background:
                                        "url('https://img1.wsimg.com/isteam/ip/786b303a-2103-4baa-8820-66fa202ca80b/homestead-dt.jpg/:/cr=t:0%25,l:27.29%25,w:45.41%25,h:100%25/rs=w:730,h:730,cg:true')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <h4 className="text-center card-title m-2">Homestead</h4>
                        </Link>
                    </div>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="thumbnail">
                        <Link to="/areas/pinecrest/">
                            <div
                                className="propiedades-img m-0 p-0"
                                style={{
                                    background:
                                        "url('https://img1.wsimg.com/isteam/ip/786b303a-2103-4baa-8820-66fa202ca80b/meilleurs-quartiers-miami-familles-pin-d4ce178.jpg/:/cr=t:0%25,l:16.72%25,w:66.56%25,h:100%25/rs=w:730,h:730,cg:true')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <h4 className="text-center card-title m-2">Pinecrest</h4>
                        </Link>
                    </div>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="thumbnail">
                        <Link to="/areas/coral-gables/">
                            <div
                                className="propiedades-img m-0 p-0"
                                style={{
                                    background:
                                        "url('https://img1.wsimg.com/isteam/ip/786b303a-2103-4baa-8820-66fa202ca80b/coral%20gables%20stock.jpg/:/cr=t:19.83%25,l:25.98%25,w:43.5%25,h:64.93%25/rs=w:730,h:730,cg:true,m')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <h4 className="text-center card-title m-2">Coral Gables</h4>
                        </Link>
                    </div>
                </MDBCol>

                <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="thumbnail">
                        <Link to="/areas/coconut-grove/">
                            <div
                                className="propiedades-img m-0 p-0"
                                style={{
                                    background:
                                        "url('https://img1.wsimg.com/isteam/ip/786b303a-2103-4baa-8820-66fa202ca80b/Web%20capture_27-6-2023_1159_vitagroveisle.com.jpeg/:/cr=t:0%25,l:22.25%25,w:55.51%25,h:100%25/rs=w:730,h:730,cg:true')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <h4 className="text-center card-title m-2">Coconut Grove</h4>
                        </Link>
                    </div>
                </MDBCol>

                <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="thumbnail">
                        <Link to="/areas/brickell/">
                            <div
                                className="propiedades-img m-0 p-0"
                                style={{
                                    background:
                                        "url('https://img1.wsimg.com/isteam/ip/786b303a-2103-4baa-8820-66fa202ca80b/brickell.jpg/:/cr=t:9.43%25,l:16.07%25,w:39.41%25,h:60.25%25/rs=w:730,h:730,cg:true,m')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <h4 className="text-center card-title m-2">Brickell</h4>
                        </Link>
                    </div>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="thumbnail">
                        <Link to="/areas/miami-beach/">
                            <div
                                className="propiedades-img m-0 p-0"
                                style={{
                                    background:
                                        "url('https://img1.wsimg.com/isteam/ip/786b303a-2103-4baa-8820-66fa202ca80b/miamibeach-normandyfountain-square.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,h:730,cg:true')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <h4 className="text-center card-title m-2">Miami Beach</h4>
                        </Link>
                    </div>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="thumbnail">
                        <Link to="/areas/sunny-isles/">
                            <div
                                className="propiedades-img m-0 p-0"
                                style={{
                                    background:
                                        "url('https://img1.wsimg.com/isteam/ip/786b303a-2103-4baa-8820-66fa202ca80b/sunny%20isles.jpg/:/cr=t:0%25,l:12.5%25,w:75%25,h:100%25/rs=w:730,h:730,cg:true')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <h4 className="text-center card-title m-2">Sunny Isles</h4>
                        </Link>
                    </div>
                </MDBCol>

                <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="thumbnail">
                        <Link to="/areas/downtown/">
                            <div
                                className="propiedades-img m-0 p-0"
                                style={{
                                    background:
                                        "url('https://img1.wsimg.com/isteam/ip/786b303a-2103-4baa-8820-66fa202ca80b/Waldorf-Astoria-Building-3-016c4ca.jpg/:/cr=t:0%25,l:5.75%25,w:88.51%25,h:100%25/rs=w:730,h:730,cg:true')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <h4 className="text-center card-title m-2">Downtown</h4>
                        </Link>
                    </div>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="thumbnail">
                        <Link to="/areas/edgewater/">
                            <div
                                className="propiedades-img m-0 p-0"
                                style={{
                                    background:
                                        "url('https://img1.wsimg.com/isteam/ip/786b303a-2103-4baa-8820-66fa202ca80b/edition%20residences%20edgewater.jpg/:/cr=t:0%25,l:24.67%25,w:50.67%25,h:100%25/rs=w:730,h:730,cg:true')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <h4 className="text-center card-title m-2">Edgewater</h4>
                        </Link>
                    </div>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="thumbnail">
                        <Link to="/areas/bay-harbor/">
                            <div
                                className="propiedades-img m-0 p-0"
                                style={{
                                    background:
                                        "url('https://img1.wsimg.com/isteam/ip/786b303a-2103-4baa-8820-66fa202ca80b/bay%20harbor%20islands-6ee11cf.jpg/:/cr=t:0.05%25,l:0%25,w:100%25,h:99.91%25/rs=w:730,h:730,cg:true')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <h4 className="text-center card-title m-2">Bay Harbor</h4>
                        </Link>
                    </div>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="thumbnail">
                        <Link to="/areas/north-bay-village">
                            <div
                                className="propiedades-img m-0 p-0"
                                style={{
                                    background:
                                        "url('https://img1.wsimg.com/isteam/ip/786b303a-2103-4baa-8820-66fa202ca80b/sunny%20isles.jpg/:/cr=t:0%25,l:12.5%25,w:75%25,h:100%25/rs=w:730,h:730,cg:true')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <h4 className="text-center card-title m-2">North Bay Village</h4>
                        </Link>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default AreasComponent;
