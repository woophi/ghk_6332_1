import { Button } from '@alfalab/core-components/button';
import { Typography } from '@alfalab/core-components/typography';
import { RowItem } from './RowItem';
import { appSt } from './style.css';
import { StockItem } from './types';

type Props = {
  stockItem: StockItem;
  onClick: (s: StockItem) => void;
};

export const MarginRequestItem = ({ stockItem, onClick }: Props) => {
  return (
    <>
      <RowItem imgUrl={stockItem.img} name={stockItem.name} stockItem={stockItem} />
      <div style={{ marginTop: '1rem' }}>
        <Typography.TitleMobile tag="h4" view="xsmall" font="system" weight="semibold">
          Потенциальная доходность
        </Typography.TitleMobile>
      </div>

      <div className={appSt.box}>
        <Typography.TitleResponsive tag="h2" view="small" font="system" weight="medium">
          {stockItem.potentialYield}
        </Typography.TitleResponsive>
        <Typography.Text view="primary-small" tag="p" color="secondary" defaultMargins={false}>
          {stockItem.potentialYieldPeriod}
        </Typography.Text>
      </div>

      <Typography.Text view="primary-medium">{stockItem.description}</Typography.Text>

      <Button style={{ marginBottom: '1rem' }} block={true} view="secondary" onClick={() => onClick(stockItem)}>
        Купить
      </Button>
    </>
  );
};
