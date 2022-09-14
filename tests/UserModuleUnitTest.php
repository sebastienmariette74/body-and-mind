<?php

namespace App\Tests;

use App\Entity\Module;
use App\Entity\User;
use App\Entity\UserModule;
use PHPUnit\Framework\TestCase;

class userModuleModuleUnitTest extends TestCase
{
    public function testIsTrue()
    {
        $userModule = new UserModule();
        $user = new User();
        $module = new Module();


        $userModule
            ->setIsActivated(true)
            ->setUser($user)
            ->setModule($module);

        $this->assertTrue($userModule->isIsActivated() === true);
        $this->assertTrue($userModule->getUser() === $user);
        $this->assertTrue($userModule->getModule() === $module);
    }

    public function testIsFalse()
    {
        $userModule = new UserModule();
        $user = new User();
        $module = new Module();

        $userModule
            ->setIsActivated(true)
            ->setUser($user)
            ->setModule($module);

        $this->assertFalse($userModule->isIsActivated() === false);
        $this->assertFalse($userModule->getUser() === new User());
        $this->assertFalse($userModule->getModule() === new Module());
    }

    public function testIsEmpty()
    {
        $userModule = new UserModule();

        $this->assertEmpty($userModule->isIsActivated());
        $this->assertEmpty($userModule->getUser());
        $this->assertEmpty($userModule->getModule());
    }
}
