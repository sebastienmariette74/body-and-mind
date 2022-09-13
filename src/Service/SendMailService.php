<?php

namespace App\Service;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;

class SendMailService 
{
    public function __construct(private MailerInterface $mailer ){}

    public function send (
        string $from,
        string $to,
        string $subject,
        string $template,
        array $context
    ): void
    {
        $email = (new TemplatedEmail())
                    ->from($from)
                    ->to($to)
                    ->subject($subject)
                    ->htmlTemplate("email/$template.html.twig")
                    ->context($context);

        $this->mailer->send($email);
    }
}