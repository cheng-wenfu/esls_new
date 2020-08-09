import React from 'react';
import { Card } from 'antd';

import styles from './HomeStatisticDataCard.less'




interface HomeStatisticDataCardProps {
  icon: any;   //TODO:
  title: string;
  value: number | undefined;
}


const HomeStatisticDataCard: React.FC<HomeStatisticDataCardProps>  = ({icon, title, value}) => {
    return (
      <Card className={styles.dataCard} bodyStyle={{padding: "10px"}}>
        <div className={styles.iconWarp}>
          {icon}
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.value}>{value}</p>
        </div>
      </Card>
    )
}

export default HomeStatisticDataCard;
