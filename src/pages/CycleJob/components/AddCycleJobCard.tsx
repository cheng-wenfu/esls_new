import React from 'react';
import { Dispatch } from 'umi';
import { Card, Button, Input, Select } from 'antd';


interface AddCycleJobCardProps {

}

interface InputItemProps {
  text: string;
  options: {
    value: string;
  }[];
  children?: React.ReactElement;
}



const AddCycleJobCard: React.FC<AddCycleJobCardProps> = () => {

  const InputItem = (props: InputItemProps) => {
    const { text, options, children } = props;
    return (
      <div>
        <span>{text}</span>
        <Select
          options={options}
        />
        {children}
      </div>
    )
  }

  return (
    <Card title="添加定期任务">
      <InputItem text="商品定期任务" options={[{value: 'test1'}, {value: 'test2'}]} />
      <InputItem text="选择变价店铺" options={[{value: 'test1'}, {value: 'test2'}]} />
      <InputItem text="价签定期更新" options={[{value: 'test1'}, {value: 'test2'}]}>
        <div>
          <Input />
          <Button>添加</Button>
        </div>
      </InputItem>
      <InputItem text="价签定期巡检" options={[{value: 'test1'}, {value: 'test2'}]}>
        <div>
          <Input />
          <Button>添加</Button>
        </div>
      </InputItem>
      <InputItem text="价签定期获取计量数据" options={[{value: 'test1'}, {value: 'test2'}]}>
        <div>
          <Input />
          <Button>添加</Button>
        </div>
      </InputItem>
    </Card>
  )
}


export default AddCycleJobCard;
