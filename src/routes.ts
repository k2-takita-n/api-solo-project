import {Controller} from "./controller/Controller";

export const Routes = [{
    method: "get",
    route: "/makers",
    controller: Controller,
    action: "allMakers"
},{
    method: "get",
    route: "/makers/:id",
    controller: Controller,
    action: "oneMakers"
},{
    method: "post",
    route: "/makers",
    controller: Controller,
    action: "postMakers"
}, {
    method: "delete",
    route: "/makers/:id",
    controller: Controller,
    action: "removeMakers"
}, {
    method: "patch",
    route: "/makers/:id",
    controller: Controller,
    action: "patchMakers"
}, {
    method: "get",
    route: "/skis",
    controller: Controller,
    action: "allSkis"
},{
    method: "get",
    route: "/skis/:id",
    controller: Controller,
    action: "oneSkis"
},{
    method: "post",
    route: "/skis",
    controller: Controller,
    action: "postSkis"
}, {
    method: "delete",
    route: "/skis/:id",
    controller: Controller,
    action: "removeSkis"
}, {
    method: "patch",
    route: "/skis/:id",
    controller: Controller,
    action: "patchSkis"
}];