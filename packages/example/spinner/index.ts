import { Div, Button } from '@kansu/core';

interface SpinnerProps {
    readonly value: number;
}

const initProps: SpinnerProps = {
    value: 0
};

export function Spinner({ value }: SpinnerProps = initProps) {
    return Div(
        Button('+'),
        Div(value.toString()),
        Button('-')
    );
}