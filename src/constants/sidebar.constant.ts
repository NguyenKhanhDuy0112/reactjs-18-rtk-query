import { PageRoute, PermissionUserEnum, RoleUserEnum } from "@/enums"
import { SidebarItem } from "@/models"
import { AppstoreOutlined, UserOutlined, InboxOutlined, SettingOutlined, GiftOutlined } from "@ant-design/icons"

export const SIDE_BARS: SidebarItem[] = [
    {
        key: PageRoute.Dashboard,
        link: PageRoute.Dashboard,
        label: "Dashboard",
        icon: AppstoreOutlined,
        permission: "",
    },
    {
        key: PageRoute.ContentManagements,
        label: "Content Management",
        icon: InboxOutlined,
        permission: PermissionUserEnum.ContentManagement,
        children: [
            {
                key: PermissionUserEnum.CategoryManagement,
                link: PageRoute.Categories,
                label: "Categories",
                icon: AppstoreOutlined,
                permission: PermissionUserEnum.ContentManagement,
                roles: [RoleUserEnum.Admin, RoleUserEnum.Staff, RoleUserEnum.Partner],
            },
            {
                key: PermissionUserEnum.MasterPage,
                link: PageRoute.MasterPage,
                label: "Master Page",
                icon: AppstoreOutlined,
                permission: PermissionUserEnum.ContentManagement,
                roles: [RoleUserEnum.Admin, RoleUserEnum.Staff, RoleUserEnum.Partner],
            },
            {
                key: PermissionUserEnum.CouponManagement,
                link: PageRoute.Coupons,
                label: "Coupons",
                icon: AppstoreOutlined,
                permission: PermissionUserEnum.CouponManagement,
                roles: [RoleUserEnum.Admin, RoleUserEnum.Staff, RoleUserEnum.Partner],
            },
            {
                key: PermissionUserEnum.MediaManagement,
                link: PageRoute.MediaManagement,
                label: "Media Management",
                icon: AppstoreOutlined,
                permission: PermissionUserEnum.CouponManagement,
                roles: [RoleUserEnum.Admin, RoleUserEnum.Staff, RoleUserEnum.Partner],
            },
        ],
    },
    {
        key: "loyalty",
        label: "Loyalty Management",
        icon: GiftOutlined,
        permission: PermissionUserEnum.UserManagement,
        children: [
            {
                key: PermissionUserEnum.LoyaltyViewProductCategory,
                link: PageRoute.LoyaltyCategory,
                label: "Categories",
                permission: PermissionUserEnum.LoyaltyViewProductCategory,
                roles: [RoleUserEnum.Admin, RoleUserEnum.Staff, RoleUserEnum.Partner],
            },
            {
                key: PermissionUserEnum.LoyaltyViewProduct,
                link: PageRoute.LoyaltyProduct,
                label: "Products",
                permission: PermissionUserEnum.LoyaltyViewProduct,
                roles: [RoleUserEnum.Admin, RoleUserEnum.Staff, RoleUserEnum.Partner],
            },
            {
                key: PermissionUserEnum.LoyaltyViewProductCollection,
                link: PageRoute.LoyaltyCollections,
                label: "Collections",
                permission: PermissionUserEnum.LoyaltyViewProduct,
                roles: [RoleUserEnum.Admin, RoleUserEnum.Staff, RoleUserEnum.Partner],
            },
            {
                key: PermissionUserEnum.LoyaltyViewMembers,
                link: PageRoute.LoyaltyMember,
                label: "Members",
                permission: PermissionUserEnum.UserManagement,
                roles: [RoleUserEnum.Admin, RoleUserEnum.Staff, RoleUserEnum.Partner],
            },
            {
                key: PermissionUserEnum.LoyaltyTagManagement,
                link: PageRoute.LoyaltyTags,
                label: "Tags",
                permission: PermissionUserEnum.LoyaltyTagManagement,
                roles: [RoleUserEnum.Admin, RoleUserEnum.Staff, RoleUserEnum.Partner],
            },
        ],
    },
    {
        key: "admin",
        label: "Admin",
        icon: UserOutlined,
        permission: PermissionUserEnum.UserManagement,
        children: [
            {
                key: PermissionUserEnum.UserManagement,
                link: PageRoute.UserManagement,
                label: "User Management",
                permission: PermissionUserEnum.UserManagement,
                roles: [RoleUserEnum.Admin, RoleUserEnum.Staff, RoleUserEnum.Partner],
            },
            {
                key: PermissionUserEnum.GroupRoleManagement,
                link: PageRoute.GroupRoleManagement,
                label: "Role Management",
                permission: PermissionUserEnum.UserManagement,
                roles: [RoleUserEnum.Admin, RoleUserEnum.Staff, RoleUserEnum.Partner],
            },
        ],
    },
    {
        key: "setting",
        label: "Setting",
        icon: SettingOutlined,
        permission: PermissionUserEnum.UserManagement,
        children: [
            {
                key: PermissionUserEnum.SettingsManagement,
                link: PageRoute.SettingClearCache,
                label: "Clear cache",
                permission: PermissionUserEnum.UserManagement,
                roles: [RoleUserEnum.Admin, RoleUserEnum.Staff, RoleUserEnum.Partner],
            },
        ],
    },
]
