import { AuthApiConnection1Repository } from '../../../infrastructure/authApiConnection1Repository';
import { Demo } from './demo';

export class DemoRepository extends AuthApiConnection1Repository {
  async find() {
    return this.client.get('/demos/demo');
  }

  async upsert(demo: Demo) {
    return this.client.put('/demos/demo', demo);
  }
}
