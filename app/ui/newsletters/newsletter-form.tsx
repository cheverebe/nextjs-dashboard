import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectItem } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Newsletter } from '@prisma/client';

type NewsletterFormProps = {
  initialData?: Newsletter | null;
  formAction: (data: FormData) => Promise<any>;
  errors?: {
    [key: string]: string[];
  };
  generalError?: string;
  loading?: boolean;
};

export default function NewsletterForm({
  initialData,
  formAction,
  errors,
  generalError,
  loading,
}: NewsletterFormProps) {
  return (
    <form className="grid gap-4" action={formAction}>
      <div className="grid gap-2">
        <Label htmlFor="name">Newsletter Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter newsletter name"
          defaultValue={initialData?.name}
          loading={loading}
        />
        {errors?.name && (
          <div className="flex h-8 items-end space-x-1">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errors.name}</p>
          </div>
        )}
        <Input
          id="ownerId"
          name="ownerId"
          type="hidden"
          value={initialData?.ownerId}
        />
      </div>
      {/* <div className="grid gap-2">
                <Label htmlFor="sources">News Sources</Label>
                <Textarea id="sources" placeholder="Enter news sources (one per line)" rows={4} />
              </div> */}
      <div className="grid gap-2">
        <Label htmlFor="frequency">Frequency</Label>
        <Select
          id="frequency"
          name="frequency"
          loading={loading}
          defaultValue={initialData?.frequency || 'WEEKLY'}
        >
          <SelectItem value="DAILY">Daily</SelectItem>
          <SelectItem value="WEEKLY">Weekly</SelectItem>
          <SelectItem value="MONTHLY">Monthly</SelectItem>
        </Select>
        {errors?.frequency && (
          <div className="flex h-8 items-end space-x-1">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errors.frequency}</p>
          </div>
        )}
      </div>
      {/* <div className="grid gap-2">
                <Label htmlFor="recipients">Recipients</Label>
                <Textarea id="recipients" placeholder="Enter recipient emails (one per line)" rows={4} />
              </div> */}
      {loading ? (
        <Skeleton className="h-10 w-40 justify-self-end bg-primary" />
      ) : (
        <Button type="submit" className="justify-self-end">
          {initialData ? 'Update' : 'Create'} Newsletter
        </Button>
      )}
      {generalError && (
        <div className="flex h-8 items-end space-x-1">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
          <p className="text-sm text-red-500">{generalError}</p>
        </div>
      )}
    </form>
  );
}
