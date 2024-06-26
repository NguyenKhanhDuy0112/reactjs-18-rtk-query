//HOOKS
import { useState } from "react"

//UTILITIES
import moment from "moment"

//MODELS
import { Common, DataResponse, ICategory, ICategoryType, IRequestPaging } from "@/models"
import { ColumnsType, TablePaginationConfig } from "antd/es/table"

//ENUMS
import { FormatDateEnum, StatusEnum } from "@/enums"

//ICONS
import DotMenuIc from "@/assets/icons/dots_menu_icon.svg"

//COMPONENTS
import { Button, Col, Dropdown, Input, MenuProps, Row, Space, Table, Tag } from "antd"
import { INIT_PAGINATION } from "@/constants"

interface MasterCenterListingProps {
    data?: DataResponse<ICategoryType[]>
    loading?: boolean
    onPagination: (pagination: TablePaginationConfig) => void
    onDelete: (data?: ICategoryType) => void
    onActionForm: (value?: ICategoryType) => void
}

function MasterCenterListing(props: MasterCenterListingProps) {
    const { data, loading, onActionForm, onDelete, onPagination } = props

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
            width: "8%",
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
            <Row justify={"space-between"} gutter={[16, 16]}>
                <Col lg={{ span: 8 }} xs={{ span: 24 }} md={{ span: 12 }}>
                    <Input.Search type="primary" placeholder="Search..." />
                </Col>
            </Row>
            <Table
                columns={columns}
                rowKey={"id"}
                loading={loading}
                dataSource={data?.data || []}
                scroll={{ x: "auto" }}
                pagination={{ total: data?.total, pageSize: INIT_PAGINATION.limit, current: data?.page }}
                onChange={(pagination) => onPagination(pagination)}
            />
        </Space>
    )
}

export default MasterCenterListing
