import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { Button } from 'shared/ui/Button';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from 'entities/Counter/model/selector/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button data-testid="increment-btn" onClick={increment}>{t('increment')}</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>{t('decrement')}</Button>
        </div>
    );
};
