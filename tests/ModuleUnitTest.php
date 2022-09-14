<?php

namespace App\Tests;

use App\Entity\Module;
use PHPUnit\Framework\TestCase;

class ModuleUnitTest extends TestCase
{
    public function testIsTrue()
    {
        $module = new Module();

        $module
            ->setName('name')
            ->setSlug('slug');

        $this->assertTrue($module->getName() === 'name');
        $this->assertTrue($module->getSlug() === 'slug');

    }

    public function testIsFalse()
    {
        $module = new Module();

        $module
            ->setName('name')
            ->setSlug('slug');
            
            $this->assertFalse($module->getName() === 'false');
            $this->assertFalse($module->getSlug() === 'false');

    }

    public function testIsEmpty()
    {
        $module = new module();
        
        $this->assertEmpty($module->getName());
        $this->assertEmpty($module->getSlug());
        
    }
}
