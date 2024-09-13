import { forwardRef } from "react"
import styles from ''

export const Input = forwardRef(({ ...rest }, ref) => {
    return (
        <div>
            <label className="headline">{rest.label}
                <input ref={ref} {...rest} />
                {rest.error?.message}
            </label>
        </div>
    )
})