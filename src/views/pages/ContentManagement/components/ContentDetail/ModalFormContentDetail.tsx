import { AssetsImages } from "@/assets/images"

//CONSTANTS
import { TAB_LANGS } from "@/constants"

//ENUMS
import { LangCodeEnum } from "@/enums"

//HOOKS
import { useEffect } from "react"
import { useRouter } from "@/hooks"

//MODELS
import { IContentDetail, IContentDetailForm } from "@/models"

//COMPONENTS
import { Badge, Button, Card, Col, Form, Input, Modal, Row, Tabs } from "antd"
import Editor from "@/components/Editor"

interface ModalFormContentDetailProps {
    isLoading?: boolean
    data?: IContentDetail[]
    onSubmitForm: (value: IContentDetailForm) => void
    show: boolean
    onClose: () => void
}

function ModalFormContentDetail(props: ModalFormContentDetailProps) {
    const { isLoading, data, show, onClose, onSubmitForm } = props

    //ANTD
    const [form] = Form.useForm()
    const { params } = useRouter()

    useEffect(() => {
        if (data?.length) {
            const payload = {
                items: [...data],
            }
            console.log("Data: ", data)
            form.setFieldsValue(payload)
        } else {
            form.resetFields()
        }
    }, [data])

    const handleSubmitForm = async (values: IContentDetailForm) => {
        try {
            const payload: IContentDetailForm = {
                items: values?.items,
                master_content_id: data?.[0]?.master_content_id,
                master_content_detail_id: data?.[0]?.master_content_detail_id,
            }

            onSubmitForm(payload)
        } catch (err) {}
    }

    return (
        <Modal
            width={2000}
            open={show}
            onCancel={onClose}
            footer={
                <>
                    <Button type="dashed" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button loading={isLoading} onClick={() => form.submit()} type="primary">
                        Save
                    </Button>
                </>
            }
            title="Content Detail"
        >
            <Form
                initialValues={{
                    items: TAB_LANGS?.map((item) => ({ lang: item?.value, title: "", sub_title: "", content: "" })),
                }}
                layout="vertical"
                form={form}
                onFinish={handleSubmitForm}
            >
                <Form.Item name={"items"}>
                    <Form.List name="items">
                        {(fields, { add, remove }) => (
                            <Row gutter={16}>
                                {fields.map(({ key, name, ...restField }) => {
                                    console.log(key, name, restField)
                                    const lang = restField?.fieldKey === 1 ? LangCodeEnum.VI : LangCodeEnum.EN
                                    return (
                                        <Col span={12}>
                                            <Badge.Ribbon
                                                placement="end"
                                                text={
                                                    <img
                                                        width={25}
                                                        src={
                                                            lang === LangCodeEnum.EN
                                                                ? AssetsImages.unitedStatesFlag
                                                                : AssetsImages.vietnamFlag
                                                        }
                                                    />
                                                }
                                            >
                                                <Card>
                                                    <Row gutter={24}>
                                                        <Col span={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                label="Title"
                                                                name={[name, "title"]}
                                                            >
                                                                <Input placeholder="Title" />
                                                            </Form.Item>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                label="Sub Title"
                                                                name={[name, "sub_title"]}
                                                            >
                                                                <Input placeholder="Sub title" />
                                                            </Form.Item>
                                                        </Col>
                                                    </Row>
                                                    <Form.Item {...restField} label="Content" name={[name, "content"]}>
                                                        <Editor
                                                            value={
                                                                form.getFieldValue(`${name}.content`)
                                                                    ? form.getFieldValue(`${name}.content`)
                                                                    : ""
                                                            }
                                                            onChange={(value) =>
                                                                form.setFieldValue(`${name}.content`, value)
                                                            }
                                                        />
                                                    </Form.Item>
                                                </Card>
                                            </Badge.Ribbon>
                                        </Col>
                                    )
                                })}
                            </Row>
                        )}
                    </Form.List>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalFormContentDetail
