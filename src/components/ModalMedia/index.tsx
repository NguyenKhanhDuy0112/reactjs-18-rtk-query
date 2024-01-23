import { useGetMediaApiQuery } from "@/services/media.service"
import { Button, List, Modal, Spin, message } from "antd"
import { CloudUploadOutlined } from "@ant-design/icons"
import MediaForm from "@/views/pages/MediaManagement/sections/MediaForm"
import { useModal } from "@/hooks"

interface ModalMediaProps {
    show: boolean
    onClose: () => void
    onSelectImage: (value: string) => void
}

function ModalMedia(props: ModalMediaProps) {
    const { show, onClose, onSelectImage } = props
    const { visible: visibleMediaForm, toggle: onToggleMediaForm } = useModal()
    const { data, refetch, isLoading: isLoadingMedia } = useGetMediaApiQuery()
    //show modal image and select image

    const handleSelectImage = (path: string) => {
        message.success("Select image success!")
        onSelectImage(path || "")
        navigator.clipboard.writeText(path)
    }

    const handleSubmitMedia = () => {
        refetch()
    }

    return (
        <>
            <Modal
                footer={null}
                title={
                    <Button onClick={onToggleMediaForm} icon={<CloudUploadOutlined />} type="primary">
                        Upload
                    </Button>
                }
                width={2000}
                open={show}
                onCancel={onClose}
            >
                <Spin spinning={isLoadingMedia}>
                    <List
                        grid={{ gutter: 16, column: 6 }}
                        dataSource={data?.data}
                        renderItem={(item) => (
                            <List.Item className="modal_media-item" key={item?.id}>
                                <img
                                    height={150}
                                    onClick={() => handleSelectImage(item?.path || "")}
                                    className="modal_media-img w-100"
                                    src={item?.path}
                                    alt={item?.originalname}
                                    key={item?.id}
                                />
                            </List.Item>
                        )}
                    />
                </Spin>
            </Modal>
            <MediaForm show={visibleMediaForm} onClose={onToggleMediaForm} onSubmitForm={handleSubmitMedia} />
        </>
    )
}

export default ModalMedia
