
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
function Perpapers(){
    const {t}=useTranslation()
    return(
        <div className="services">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"></link>
            <div className="row p-0 m-0 p-4">
                <h3 className="col-6 m-0">{t("userdashBoardPersonalPapersMainTitle")}</h3>
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
                        <Th>{t("userdashBoardPersonalPapersDocument")}</Th>
                        <Th>{t("userdashBoardPersonalPapersStatus")}</Th>
                        <Th>{t("userdashBoardPersonalPapersUploadDate")}</Th>
                        <Th>{t("userdashBoardPersonalPapersLastModified")}</Th>
                        <Th>{t("userdashBoardPersonalPapersActions")}</Th>
                        <Th></Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>03</Td>
                        <Td>{t("userdashBoardPersonalPapersPersonalId")}</Td>
                        <Td className='green'>{t("userdashBoardPersonalPapersValid")}</Td>
                        <Td>12-12-2024</Td>
                        <Td>12-12-2024</Td>
                        <Td>view</Td>
                        <Td>{t("admindashboardEditUser")}</Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>{t("userdashBoardPersonalPaperstaxCard")}</Td>
                        <Td className='red'>{t("userdashBoardPersonalPapersNotValid")}</Td>
                        <Td>12-12-2024</Td>
                        <Td>12-12-2024</Td>
                        <Td>view</Td>
                        <Td>{t("admindashboardEditUser")}</Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>{t("userdashBoardPersonalPapersCommericalRegister")}</Td>
                        <Td className='red'>{t("userdashBoardPersonalPapersNotValid")}</Td>
                        <Td>12-12-2024</Td>
                        <Td>12-12-2024</Td>
                        <Td>upload</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>{t("userdashBoardPersonalPapersEstablishmentContract")}</Td>
                        <Td className='green'>{t("userdashBoardPersonalPapersValid")}</Td>
                        <Td>12-12-2024</Td>
                        <Td>12-12-2024</Td>
                        <Td>view</Td>
                        <Td>{t("admindashboardEditUser")}</Td>
                    </Tr>
                    </Tbody>
                </Table>
            </div>
        </div>
    )
}
export default Perpapers;