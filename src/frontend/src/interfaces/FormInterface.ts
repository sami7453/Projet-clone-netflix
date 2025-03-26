import type ButtonInterface from "./ButtonInterface";
import type FieldInterface from "./FieldInterface";

export default interface FormInterface {
    fields: Array<FieldInterface>,
    buttons: ButtonInterface[]
}
