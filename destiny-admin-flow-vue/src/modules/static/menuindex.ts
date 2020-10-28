import { Guid } from 'guid-typescript';
import { IMenuRouter } from '@/domain/entity/menudto/menuRouterDto';
import { MenuEnum } from '@/domain/entity/menudto/menuDto';

export const MenuList: IMenuRouter =
{
    id: Guid.EMPTY,
    sort: -1,
    type: MenuEnum.Menu,
    path: "/",
    redirect: "",
    componentName: "",
    component: "",
    icon: "",
    parentId: Guid.EMPTY,
    parentNumber: "",
    name: "根节点",
    children: [
        {
            id: "da92480a-5914-a8bc-110b-aedb0457ce6c",
            sort: -1,
            type: MenuEnum.Menu,
            path: "/layout",
            redirect: "",
            componentName: "",
            component: "",
            icon: "",
            parentId: Guid.EMPTY, 
            parentNumber: "",
            name: "系统管理",
            children: [
                {
                    id: Guid.create().toString(),
                    sort: -1,
                    type: MenuEnum.Menu,
                    path: "/system/user",
                    redirect: "",
                    componentName: "",
                    component: "identity/user-managerment/user-managerment",
                    icon: "",
                    parentId: "da92480a-5914-a8bc-110b-aedb0457ce6d",
                    parentNumber: "",
                    name: "用户管理",
                    children: [],
                },
                {
                    id: Guid.create().toString(),
                    sort: -1,
                    type: MenuEnum.Menu,
                    path: "/identity/role",
                    redirect: "",
                    componentName: "",
                    component: "identity/role-managerment/role-managerment",
                    icon: "",
                    parentId: "da92480a-5914-a8bc-110b-aedb0457ce6d",
                    parentNumber: "",
                    name: "角色管理",
                    children: [],
                },
                {
                    id: Guid.create().toString(),
                    sort: -1,
                    type: MenuEnum.Menu,
                    path: "/system/codegenerator",
                    redirect: "",
                    componentName: "",
                    component: "system/code-generator-managerment/code-generator",
                    icon: "",
                    parentId: "da92480a-5914-a8bc-110b-aedb0457ce6d",
                    parentNumber: "",
                    name: "代码生成器管理",
                    children: [],
                },
                {
                    id: Guid.create().toString(),
                    sort: -1,
                    type: MenuEnum.Menu,
                    path: "/system/menu",
                    redirect: "",
                    componentName: "",
                    component: "system/menu-managerment/menu-managerment",
                    icon: "",
                    parentId: "da92480a-5914-a8bc-110b-aedb0457ce6d",
                    parentNumber: "",
                    name: "菜单管理",
                    children: [],
                }
            ],
        },
        {
            id: "9aed4b44-ee69-a7b9-93ff-ce3b9813dc37",
            sort: -1,
            type: MenuEnum.Menu,
            path: "/layout",
            redirect: "",
            componentName: "",
            component: "",
            icon: "",
            parentId: Guid.EMPTY, 
            parentNumber: "",
            name: "流程管理",
            children: [
                {
                    id: Guid.create().toString(),
                    sort: -1,
                    type: MenuEnum.Menu,
                    path: "/flow/managerment",
                    redirect: "",
                    componentName: "",
                    component: "flow/flow-managerment/flow-managerment",
                    icon: "",
                    parentId: "9aed4b44-ee69-a7b9-93ff-ce3b9813dc37",
                    parentNumber: "",
                    name: "流程管理",
                    children: [],
                }
            ],
        }
    ],
}

