import del from "del";

export function cleanBuild() {
    return del(["./build/"]);
}