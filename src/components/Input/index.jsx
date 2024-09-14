import { forwardRef } from "react"

export const Input = forwardRef(({ ...rest }, ref, className) => {
    return (
        <div className={className}>
            <label>{rest.label}
                <input ref={ref} {...rest} />
                {rest.error?.message}
            </label>
        </div>
    )
})