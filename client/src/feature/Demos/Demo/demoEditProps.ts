import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../store/AuthContext';
import { Demo } from './demo';
import { DemoRepository } from './demoRepository';
import { useForm } from 'antd/lib/form/Form';
import { useLoadingContext } from '../../../store/LoadingContext';
import { message } from 'antd';

export const demoEditProps = () => {
  const [demoForm] = useForm();
  const [demo, setDemo] = useState(new Demo());
  const demoRepository = new DemoRepository(useAuthContext());
  const { isLoading, loading } = useLoadingContext();

  const refreshDemo = (newDemo: Demo) => {
    /*
      @note
        set〇〇 は非同期処理のため demo が更新されていることを期待しない
        （=連続する処理で使用する場合は更新した変数のほうを使用する）
    */
    // モデルの更新
    setDemo(newDemo);
    // formの再描画
    demoForm.setFieldsValue(newDemo);
  };

  // load
  useEffect(() => {
    loading(async () => {
      const response = await demoRepository.find();
      refreshDemo(response.data);
    });
  }, []);

  const save = (value: object) => {
    const newDemo = Object.assign(demo, value);

    loading(async () => {
      const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      await _sleep(2000);

      const response = await demoRepository.upsert(newDemo);
      refreshDemo({ ...newDemo, id: response.data.id });
      message.success('保存しました');
    });
  };

  return { demoForm, demo, save, isLoading };
};
