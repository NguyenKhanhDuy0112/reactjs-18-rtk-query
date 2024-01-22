//HOOKS
import { useModal, useRouter } from "@/hooks"
import { useEffect, useRef } from "react"

//SERVICES
import { useGetContentManagementApiQuery } from "@/services/contentManagement.service"

//COMPONENTS
import EditContent from "./sections/EditContent/EditContent"
import PageWrapper from "@/components/PageWrapper"
import PreviewDevice from "@/components/PreviewDevice"
import { env } from "@/constants"

function ContentManagement() {
    const {
        params: { cateTypeID },
    } = useRouter()
    const { visible, toggle } = useModal()
    const iframeDevice = useRef<any>(null)
    const { data, refetch } = useGetContentManagementApiQuery({ cate_type_id: cateTypeID || "" }, { skip: !cateTypeID })

    useEffect(() => {
        const iframe = document.getElementById("iframeDevice") as HTMLIFrameElement
        iframe.contentWindow?.postMessage(JSON.stringify(data?.data), `${env.FO_URL}/draft/collection`)
    }, [data, visible])

    return (
        <PageWrapper title="Content Management">
            <EditContent data={data?.data} refetchContent={refetch} onViewContent={toggle} />
            <PreviewDevice ref={iframeDevice} path={`${env.FO_URL}/draft/collection`} show={visible} onClose={toggle} />
        </PageWrapper>
    )
}

export default ContentManagement
