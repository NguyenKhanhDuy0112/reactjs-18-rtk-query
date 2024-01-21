//HOOKS
import { useState } from "react"

//UTILITIES
import moment from "moment"

//MODELS
import { Common, DataResponse, ICategory, ICategoryType, IRequestPaging } from "@/models"
import { ColumnsType } from "antd/es/table"

//ENUMS
import { FormatDateEnum, StatusEnum } from "@/enums"

//ICONS
import DotMenuIc from "@/assets/icons/dots_menu_icon.svg"
import { PlusOutlined } from "@ant-design/icons"

//COMPONENTS
import { Button, Col, Dropdown, Input, MenuProps, Row, Space, Table, Tag } from "antd"

interface MasterCenterListingProps {
    data?: DataResponse<ICategoryType[]>
    loading?: boolean
    onDelete: (data?: ICategoryType) => void
    onActionForm: (value?: ICategoryType) => void
    pagination?: IRequestPaging
}

function MasterCenterListing(props: MasterCenterListingProps) {
    const { data, pagination, loading, onActionForm, onDelete } = props

    //STATES
    const [currentRecord, setCurrentRecord] = useState<ICategoryType>({})

    const items: MenuProps["items"] = [
        {
            label: <div onClick={() => onActionForm(currentRecord)}>Edit</div>,
            key: "0",
        },
        {
            label: <div onClick={() => onDelete(currentRecord)}>Delete</div>,
            key: "1",
        },
    ]

    const columns: ColumnsType<ICategoryType> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (value: string) => {
                return <span>{Common.renderData(value)}</span>
            },
        },
        {
            title: "Localise",
            dataIndex: "name_localize",
            key: "name_localize",
            render: (value: string) => {
                return <span>{Common.renderData(value)}</span>
            },
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            render: (value: ICategory) => {
                return <span>{Common.renderData(value?.name)}</span>
            },
        },
        {
            title: "Sub Category",
            dataIndex: "sub_category",
            key: "sub_category",
            render: (value: ICategory) => {
                return <span>{Common.renderData(value?.name)}</span>
            },
        },
        {
            title: "Status",
            dataIndex: "is_active",
            key: "is_active",
            render: (value: boolean) => {
                return (
                    <Tag color={value ? "green-inverse" : "red-inverse"}>
                        {value ? StatusEnum.Activated : StatusEnum.Deactivated}
                    </Tag>
                )
            },
        },

        {
            title: "Created at",
            dataIndex: "created_at",
            key: "created_at",
            render: (value: Date | null) => {
                return moment(value).format(FormatDateEnum.Default)
            },
        },
        {
            title: "Action",
            key: "id",
            fixed: "right",
            align: "center",
            width: "10%",
            render: (_, record: ICategoryType) => (
                <Dropdown overlayClassName="dropdown-action-table" menu={{ items }} trigger={["click"]}>
                    <Button onClick={() => setCurrentRecord(record)} type="text" className="dot-menu-action">
                        <DotMenuIc />
                    </Button>
                </Dropdown>
            ),
        },
    ]

    return (
        <Space direction="vertical" size={"large"}>
            <Row justify={"space-between"}>
                <Col>
                    <Input.Search type="primary" placeholder="Search by name" />
                </Col>
            </Row>
            <Table
                columns={columns}
                rowKey={"id"}
                loading={loading}
                dataSource={data?.data || []}
                scroll={{ x: 1000 }}
                onChange={(pagination) => {
                    console.log("Pagination: ", pagination)
                }}
                pagination={{ current: pagination?.page, total: data?.total, pageSize: pagination?.limit }}
            />
        </Space>
    )
}

export default MasterCenterListing