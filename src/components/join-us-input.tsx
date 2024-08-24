import React from 'react';
import { Input, InputProps } from './ui/input';
import ReactInputMask from 'react-input-mask';

interface IJoinUsInputProps extends InputProps {
    label?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors: any;
    mask?: string;
}

const JoinUsInput = React.forwardRef<HTMLInputElement, IJoinUsInputProps>(
    ({ errors, mask, ...rest }, ref) => {
        return (
            <div className="min-w-[180px] px-[10%] md:px-[5px]">

                {mask ? (
                    <ReactInputMask
                        mask={mask}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        ref={ref}
                        {...rest}
                        inputRef={ref}
                        className="w-full p-3 rounded bg-white text-black placeholder-gray-500"
                    />
                ) : (
                    <Input
                        {...rest}
                        ref={ref}
                        className='w-full p-3 rounded bg-white text-black placeholder-gray-500' />
                )}

                {rest.id && errors[rest.id]?.message && (
                    <p className="text-[#e50914] text-sm mt-3">{errors[rest.id].message}</p>
                )}
            </div>
        );
    },
);

JoinUsInput.displayName = 'JoinUsInput';

export { JoinUsInput };