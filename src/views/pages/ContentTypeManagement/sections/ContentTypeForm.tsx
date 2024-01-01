//MODELS
import { INIT_PAGINATION } from "@/constants"
import { MessageValidateForm } from "@/enums"
import { ICategory, ICategoryType } from "@/models"
import { useEffect, useState } from "react"

//SERVICES
import { useGetCategoriesApiQuery } from "@/services/category.service"

//COMPONENTS
import { Col, Form, FormInstance, Input, Row, Select, Switch } from "antd"

interface CouponFormProps {
    data?: ICategoryType
    form: FormInstance<ICategoryType>
    onSubmitForm: (value: ICategoryType) => void
}

function ContentTypeForm(props: CouponFormProps) {
    const { form, data, onSubmitForm } = props

    //STATES
    const [selectedCategory, setSelectedCategory] = useState<ICategory>()

    //SERVICES
    const { data: dataCategories } = useGetCategoriesApiQuery(INIT_PAGINATION)

    useEffect(() => {
        handleSelectCategory(data?.category_id || "")
    }, [data])

    const handleSelectCategory = (value: string) => {
        const selectedCategory = dataCategories?.data?.find((item) => item.id === value)
        form.setFieldsValue({ sub_category_id: data?.category_id ? data?.sub_category_id : undefined })
        setSelectedCategory(selectedCategory)
    }

    return (
        <Form onFinish={onSubmitForm} layout="vertical" labelAlign="left" wrapperCol={{ span: 24 }} form={form}>
            <Row gutter={20}>
                <Col md={{ span: 12 }} xs={{ span: 24 }}>
                    <Form.Item
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: MessageValidateForm.Required,
                            },
                        ]}
                        name={"name"}
                    >
                        <Input placeholder="Name" />
                    </Form.Item>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 24 }}>
                    <Form.Item
                        label="Status"
                        rules={[
                            {
                                required: true,
                                message: MessageValidateForm.Required,
                            },
                        ]}
                        name={"is_active"}
                        valuePropName="checked"
                    >
                        <Switch />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={20}>
                <Col md={{ span: 12 }} xs={{ span: 24 }}>
                    <Form.Item
                        label="Category"
                        rules={[
                            {
                                required: true,
                                message: MessageValidateForm.Required,
                            },
                        ]}
                        name={"category_id"}
                    >
                        <Select onChange={handleSelectCategory} placeholder="Select category">
                            {dataCategories?.data?.map((item) => (
                                <Select.Option key={item.id}>{item.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 24 }}>
                    <Form.Item label="Sub category" name={"sub_category_id"}>
                        <Select placeholder="Select category">
                            {selectedCategory?.subs?.map((item) => (
                                <Select.Option key={item.id}>{item.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}

export default ContentTypeForm