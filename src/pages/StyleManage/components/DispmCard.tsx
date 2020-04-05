import React from 'react';
import { Card } from 'antd';

import { DispmDataItem } from '@/models/styleData'

interface DispmCardProps {
  dispmData: DispmDataItem[] | undefined;
}


const DispmCard: React.FC<DispmCardProps> = ({dispmData}) => {

  return (
    <Card title="价签样式预览">

    </Card>
  )
}


export default DispmCard;
