import { SupabaseClient } from '@supabase/supabase-js';

export interface Progress {
  id: string;
  user_id: string;
  activity_id: string;
  progress: number;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export class ProgressService {
  constructor(private supabase: SupabaseClient) {}

  async getUserProgress(userId: string): Promise<Progress[]> {
    const { data, error } = await this.supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;
    return data || [];
  }

  async updateProgress(userId: string, activityId: string, progress: number): Promise<void> {
    const { error } = await this.supabase
      .from('user_progress')
      .upsert({
        user_id: userId,
        activity_id: activityId,
        progress,
        completed_at: progress >= 100 ? new Date().toISOString() : null
      }, {
        onConflict: 'user_id,activity_id'
      });

    if (error) throw error;
  }
}