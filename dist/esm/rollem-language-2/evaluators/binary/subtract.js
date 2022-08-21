import { Value } from "../..";
export function subtract($$left, $$right) {
    return (ctx) => {
        debugger;
        const $left = $$left(ctx);
        const $right = $$right(ctx);
        const total = $left.value - $right.value;
        ctx.trace(`subtract: ${$left}`);
        ctx.trace(`subtract: ${$right}`);
        return new Value({
            parentValues: [$left, $right],
            value: total,
            pretties: `${total} ⟵ ${$left.pretties} - ${$right.pretties}`
        });
    };
}
