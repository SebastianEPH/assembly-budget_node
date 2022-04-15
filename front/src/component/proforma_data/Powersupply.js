import {useForm} from "../hooks/useForm";
import {Col, Row} from "react-bootstrap";
import InputSelect from "../util/InputSelectC";
import "../util/ModalCSS.css"
import {TextActive} from "../util/TextActive";
import {InputsCustom} from "../util/custom/InputsCustom";
import {ButtonsControlls} from "../util/custom/ButtonsControlls";


export const Powersupply = ({data, others, modalHandleClose}) =>{
    const {modal,dataBrand, reloadForDB, dataStore, dataPowersupplyWatts, dataPowersupplyCertificate} = others

    const nameDiv = 'powersupply'
    const {databaseAddIf, databaseRemove, databaseUpdate, onChange, updateHook, clean,form} = useForm(data, nameDiv, modalHandleClose,reloadForDB )
    let  {name, id, index,  store, brand, link ,item_active, dol, sol, watts, certificate} = form

    return(
        <div className="accordion" id={nameDiv+'_'+id}>
            <div className="accordion-item">
                {!modal &&
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapseOne_${nameDiv}_${id}`} aria-expanded="false" >
                            <b className={"me-3"}>Power Supply {index !== 0 && `${(index+1)}`}: </b> {name} <TextActive data={{state:item_active, center:false}}/>
                        </button>
                    </h2>
                }
                <div id={`panelsStayOpen-collapseOne_${nameDiv}_${id}`} className={!modal&& "accordion-collapse collapse"}>
                    <Row className="accordion-body">
                        <Col md={11}>
                            <Row className={"pe-2 ps-2 pt-2"}>
                                <InputsCustom data={{col:9,name:"name", placeHolder:"inserta name", value:name, onChange, updateHook:""}}/>
                                <InputSelect col={3} name={"brand"} title={"brand"} update={onChange} select={brand}  data={dataBrand}/>
                                <InputSelect col={3} name={"watts"} title={"Watts"} update={onChange} select={watts}  data={dataPowersupplyWatts}/>
                                <InputSelect col={3} name={"certificate"} title={"Certificate"} update={onChange} select={certificate}  data={dataPowersupplyCertificate}/>

                                <InputsCustom data={{col:3 ,name:"sol", placeHolder:"Soles", value:sol, onChange:updateHook, updateHook:"dol"}}/>
                                <InputsCustom data={{col:3 ,name:"dol",  placeHolder:"Dollar", value:dol, onChange:updateHook, updateHook:"sol"}}/>
                                <InputsCustom data={{col:9 ,name:"link",type:"link",  placeHolder:"Link", value:link, onChange}}/>
                                <InputSelect col={3} name={"store"} title={"Store"} update={onChange} select={store}  data={dataStore}/>
                            </Row>
                        </Col>
                        <ButtonsControlls data={{modal,
                            databaseAddIf,
                            databaseUpdate,
                            databaseRemove,
                            clean,
                            col:1,
                            onChange,
                            item_active}}/>
                    </Row>
                </div>
            </div>
        </div>
    )
}