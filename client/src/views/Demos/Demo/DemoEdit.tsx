import { FormOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { demoEditProps } from '../../../feature/Demos/Demo/demoEditProps';

export const DemoEdit = () => {
  const { demoForm, demo, save, isLoading } = demoEditProps();

  return (
    <Form
      form={demoForm}
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 22 }}
      onFinish={save}
    >
      <Form.Item
        label='名称'
        name='name'
        initialValue={demo.name}
        rules={[{ required: true, message: '必須項目です' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 2, span: 22 }}>
        <Button type='primary' htmlType='submit' disabled={isLoading}>
          <FormOutlined />
          保存
        </Button>
      </Form.Item>
      {demo.id}
    </Form>
  );
};
