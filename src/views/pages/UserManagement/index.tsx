import PageWrapper from "@/components/PageWrapper"
import { useModal, useRouter } from "@/hooks"
import { IUser } from "@/models"
import { useMemo, useState } from "react"
import ModalConfirmDelete from "@/components/ModalConfirmDelete"
import UserManagementListing from "./sections/UserManagementListing"
import UserManagementForm from "./sections/UserManagementForm"
import { PageRoute, ParamsEnum } from "@/enums"
import { Button, Form } from "antd"
import { SaveFilled } from "@ant-design/icons"
import { useGetUsersApiQuery } from "@/services/user.service"
import { INIT_PAGINATION } from "@/constants"

function UserManagement() {
    //STATES
    const [pagination, setPagination] = useState(INIT_PAGINATION)

    //HOOKS
    const { visible: visibleConfirmDelete, toggle: toggleConfirmDelete } = useModal()

    //SERVICES
    const { data } = useGetUsersApiQuery(pagination)
    const { searchParams, navigate } = useRouter()
    const [form] = Form.useForm()

    const isFormUserPage = useMemo(() => {
        return searchParams.has(ParamsEnum.ID)
    }, [searchParams])

    const handleConfirmDelete = () => {}

    const handleRedirectForm = (values?: IUser) => {
        if (values?.id) {
            return navigate(`${PageRoute.UserManagement}?id=${values?.id}`)
        } else {
            return navigate(`${PageRoute.UserManagement}?id=`)
        }
    }

    const handleSubmitForm = (value: IUser) => {
        console.log("value: ", value)
    }

    return (
        <PageWrapper
            footer={
                isFormUserPage && (
                    <div className="d-flex items-center gap-4">
                        <Button type="dashed">Cancel</Button>
                        <Button icon={<SaveFilled />} type="primary" onClick={() => form.submit()}>
                            Save
                        </Button>
                    </div>
                )
            }
            hasBackBtn={isFormUserPage}
            title="User Management"
        >
            {!isFormUserPage && (
                <UserManagementListing
                    data={data}
                    pagination={pagination}
                    onActionForm={handleRedirectForm}
                    onDelete={(data) => toggleConfirmDelete()}
                />
            )}

            {isFormUserPage && <UserManagementForm onSubmitForm={handleSubmitForm} form={form} />}

            <ModalConfirmDelete
                visible={visibleConfirmDelete}
                onClose={toggleConfirmDelete}
                onConfirm={handleConfirmDelete}
            />
        </PageWrapper>
    )
}

export default UserManagement
