import { FormOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

export const DemoEdit = () => {
  return (
    <Form labelCol={{ span: 2 }} wrapperCol={{ span: 22 }}>
      <Form.Item
        label='名称'
        rules={[{ required: true, message: '必須項目です' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 2, span: 22 }}>
        <Button type='primary'>
          <FormOutlined />
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};
