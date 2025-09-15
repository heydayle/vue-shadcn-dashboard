<template>
  <Card class="w-[350px] m-auto mt-10">
    <CardHeader>
      <CardTitle> <h2 class="text-2xl font-semibold text-center mb-6">Login</h2></CardTitle>
    </CardHeader>
    <CardContent>
      <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Enter your username" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel class="mt-4">Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Enter your password" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit" class="mt-4"> Login </Button>
      </form>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(6).max(50),
  }),
)

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>
