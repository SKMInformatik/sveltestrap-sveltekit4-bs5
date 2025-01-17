declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';

export interface FormGroupProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  check?: boolean;
  disabled?: boolean;
  floating?: boolean;
  id?: string;
  inline?: boolean;
  label?: string;
  row?: boolean;
  tag?: 'div' | 'fieldset';
}

declare class FormGroup extends SvelteComponent<
  FormGroupProps,
  any,
  { default: {}; label: {} }
> {}
export default FormGroup;

}
