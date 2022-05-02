import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChatService } from './chat.service';
// import { emoticonSearchDto } from './dto/search.dto';

@ApiTags('Chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly ChatService: ChatService) {}

  @Post('/history')
  history(@Body() params) {
    return this.ChatService.history(params);
  }

  @Get('/emoticon')
  emoticon(@Query() params) {
    return this.ChatService.emoticon(params);
  }
}
