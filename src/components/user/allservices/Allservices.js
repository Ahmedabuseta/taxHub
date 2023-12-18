import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import 'font-awesome/css/font-awesome.min.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
function Allservices(){
    const {t}=useTranslation()
    return(
        <div className="services">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"></link>
            <div className="row p-0 m-0 p-4">
                <h3 className="col-6 m-0">{t("userdashBoardAllservicesMainTitle")}</h3>
                <div className="col-sm-12 col-md-6 d-flex justify-content-between p-0 m-0">
                    <input placeholder="&#xf0dc; Sort by" className='col-4' style={{"font-family":"FontAwesome"}}></input>
                    <input placeholder="&#xf002; Search list.." className='col-7' style={{"font-family":"FontAwesome"}}></input>
                </div>
            </div>
            <div className=''>
                <Table border="1" frame="void" rules="rows">
                    <Thead>
                    <Tr className='thead'>
                        <Th>#</Th>
                        <Th>{t("userdashBoardAllServicesService")}</Th>
                        <Th>{t("userdashBoardAllServicesSerialCode")}</Th>
                        <Th>{t("userdashBoardAllServicesLastUpdate")}</Th>
                        <Th>{t("userdashBoardAllServicesDate")}</Th>
                        <Th>{t("userdashBoardAllServicesAction")}</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>03</Td>
                        <Td>{t("userdashBoardAllservicesServiceName")}</Td>
                        <Td>#123-456ABC</Td>
                        <Td>12-12-2024</Td>
                        <Td>12-12-2024</Td>
                        <Td className='green'><Link to={'/user/chat'}>
                                chat 
                            </Link> 
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>{t("userdashBoardAllservicesServiceName")}</Td>
                        <Td>#123-456ABC</Td>
                        <Td>12-12-2024</Td>
                        <Td>12-12-2024</Td>
                        <Td><Link to={'/user/chat'}>
                                chat 
                            </Link> 
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>{t("userdashBoardAllservicesServiceName")}</Td>
                        <Td>#123-456ABC</Td>
                        <Td>12-12-2024</Td>
                        <Td>12-12-2024</Td>
                        <Td className='green'>{t("userdashBoardAllservicesCompleted")}</Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>{t("userdashBoardAllservicesServiceName")}</Td>
                        <Td>#123-456ABC</Td>
                        <Td>12-12-2024</Td>
                        <Td>12-12-2024</Td>
                        <Td><Link to={'/user/chat'}>
                                chat 
                            </Link> 
                        </Td>
                    </Tr>
                    </Tbody>
                </Table>
            </div>
        </div>
    )
}
export default Allservices;