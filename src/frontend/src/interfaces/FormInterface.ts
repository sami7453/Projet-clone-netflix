import type ButtonInterface from "./ButtonInterface";
import type FieldInterface from "./FieldInterface";

export default interface FormInterface {
    title: string
    fields: Array<FieldInterface>
    buttons: ButtonInterface[]
}
