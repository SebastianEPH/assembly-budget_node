import ButtonModal from "../../util/Modal/ButtonModal";
import {Modal} from "react-bootstrap";
import {useState} from "react";
import MemoryRam from "./MemoryRam";
import "../../util/ModalCSS.css"

const ModalMemoryRam = ({ proforma_id, theme, dataType, dataSize , dataBrand, dataStore, dataFreq,reloadForDB }) =>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <ButtonModal
                name={"Add Memory RAM"}
                theme={theme}
                icon_size="60"
                funct={handleShow}
            />
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
                // contentClassName={"my-modalp"}
                size={"xl"}
                keyboard={false}
            >
                <div className="modal-header mooo">
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Memory RAM
                    </Modal.Title>
                    <button type="button" onClick={handleClose} className="btn-close btn-close_" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                             className="bi bi-x-lg" >
                            <path fillRule="event"
                                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                            <path fillRule="event"
                                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </button>
                </div>


                <Modal.Body className={"mooo"}>
                    <MemoryRam data={{
                                    proforma_id,
                                    name:'',
                                    select:'',
                                    item_active:1,
                                    type:'',
                                    link:'',
                                    size:'',
                                    freq:'',
                                    brand:'',
                                    store:'',
                                    dol:0,
                                    sol:0
                               }}
                        theme={theme}
                        modalHandleClose ={handleClose}
                        reloadForDB={reloadForDB}
                        modal={true} // if true, then use added, otherwise use update function
                        dataType={dataType}
                        dataStore={dataStore}
                        dataFreq={dataFreq}
                        dataBrand={dataBrand}
                        dataSize={dataSize}
                    />

                </Modal.Body>
            </Modal>
        </>
    )
}
export default ModalMemoryRam;