import {MDBSpinner} from "mdb-react-ui-kit";

export default function Loading() {
    return (
        <MDBSpinner role="status">
            <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
    );
}
