import { SupabaseClient } from '@supabase/supabase-js';

export interface ContentItem {
  id: string;
  type: string;
  content_id: string;
  data: any;
  created_at?: string;
  updated_at?: string;
}

export class ContentService {
  constructor(private supabase: SupabaseClient) {}

  async getContent(type: string): Promise<ContentItem[]> {
    const { data, error } = await this.supabase
      .from('content')
      .select('*')
      .eq('type', type)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data || [];
  }

  async getContentItem(type: string, contentId: string): Promise<ContentItem | null> {
    const { data, error } = await this.supabase
      .from('content')
      .select('*')
      .eq('type', type)
      .eq('content_id', contentId)
      .single();

    if (error) throw error;
    return data;
  }

  async updateContent(type: string, contentId: string, data: any): Promise<void> {
    const { error } = await this.supabase
      .from('content')
      .upsert({
        type,
        content_id: contentId,
        data
      }, {
        onConflict: 'type,content_id'
      });

    if (error) throw error;
  }

  async deleteContent(type: string, contentId: string): Promise<void> {
    const { error } = await this.supabase
      .from('content')
      .delete()
      .eq('type', type)
      .eq('content_id', contentId);

    if (error) throw error;
  }
}